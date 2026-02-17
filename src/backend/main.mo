import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";


// Use migration for upgrading contentType data

actor {
  include MixinStorage();

  type QuizSectionType = {
    #identifyBedBugs;
    #habitatsHabits;
    #prevention;
    #treatmentPreparation;
  };

  type ContentType = {
    #bedBugs;
    #scorpion;
    #mouse;
    #venomousSnake;
    #cockroach;
    #hornetWasp;
    #mosquito;
  };

  type ContentSection = {
    id : Text;
    title : Text;
    content : Text;
    contentType : ContentType;
    images : [Storage.ExternalBlob];
  };

  type QuizQuestion = {
    id : Text;
    question : Text;
    options : [Text];
    correctAnswerIndex : Nat;
    explanation : Text;
    section : QuizSectionType;
  };

  type PrintableGuide = {
    id : Text;
    title : Text;
    content : Text;
    contentType : ContentType;
    file : Storage.ExternalBlob;
  };

  type QuizResult = {
    score : Nat;
    totalQuestions : Nat;
    completedQuestions : Nat;
    section : QuizSectionType;
  };

  // Data Storage
  let contentSections = Map.empty<Text, ContentSection>();
  let quizQuestions = Map.empty<Text, QuizQuestion>();
  let printableGuides = Map.empty<Text, PrintableGuide>();

  // Content Section Methods
  public query ({ caller }) func getSection(id : Text) : async ContentSection {
    switch (contentSections.get(id)) {
      case (null) {
        Runtime.trap("Section with id " # id # " does not exist");
      };
      case (?section) { section };
    };
  };

  public query ({ caller }) func getAllSections() : async [ContentSection] {
    contentSections.values().toArray();
  };

  public query ({ caller }) func getSectionsByContentType(contentType : ContentType) : async [ContentSection] {
    contentSections.values().filter(
      func(section) {
        section.contentType == contentType;
      }
    ).toArray();
  };

  // Quiz Methods
  public query ({ caller }) func getQuizQuestionsBySection(sectionType : QuizSectionType) : async [QuizQuestion] {
    quizQuestions.values().filter(
      func(q) {
        q.section == sectionType;
      }
    ).toArray();
  };

  public query ({ caller }) func getAllQuizQuestions() : async [QuizQuestion] {
    quizQuestions.values().toArray();
  };

  public query ({ caller }) func calculateQuizResult(userAnswers : [Text], sectionType : QuizSectionType) : async QuizResult {
    let questions = quizQuestions.values().filter(
      func(q) {
        q.section == sectionType;
      }
    ).toArray();
    let totalQuestions = questions.size();

    var correctAnswers = 0;
    let answerCount = userAnswers.size();

    let minCount = Nat.min(totalQuestions, answerCount);

    let answersUsed = userAnswers.sliceToArray(0, minCount);

    var i = 0;
    while (i < answersUsed.size()) {
      if (i < questions.size()) {
        if (answersUsed[i] == questions[i].options[questions[i].correctAnswerIndex]) {
          correctAnswers += 1;
        };
      };
      i += 1;
    };

    {
      score = correctAnswers;
      totalQuestions;
      completedQuestions = answerCount;
      section = sectionType;
    };
  };

  public query ({ caller }) func getQuestionById(questionId : Text) : async ?QuizQuestion {
    let question = quizQuestions.get(questionId);
    question;
  };

  // Printable Guides
  public query ({ caller }) func getGuide(id : Text) : async ?PrintableGuide {
    printableGuides.get(id);
  };

  public query ({ caller }) func getGuidesByContentType(contentType : ContentType) : async [PrintableGuide] {
    printableGuides.values().filter(
      func(guide) {
        guide.contentType == contentType;
      }
    ).toArray();
  };

  public query ({ caller }) func getAllGuides() : async [PrintableGuide] {
    printableGuides.values().toArray();
  };
};
