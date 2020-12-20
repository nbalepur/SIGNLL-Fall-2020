import FadeIn from "react-fade-in";

export const wiki_article = (
  <FadeIn delay={100}>
    <p>
      Natural language processing (NLP) is a subfield of linguistics, computer
      science, and artificial intelligence concerned with the interactions
      between computers and human language, in particular how to program
      computers to process and analyze large amounts of natural language data.{" "}
    </p>
    <p></p>
    <p>
      Challenges in natural language processing frequently involve speech
      recognition, natural language understanding, and natural-language
      generation.{" "}
    </p>
    <p></p>
    <p>
      Natural language processing has its roots in the 1950s. Already in 1950,
      Alan Turing published an article titled "Computing Machinery and
      Intelligence" which proposed what is now called the Turing test as a
      criterion of intelligence, a task that involves the automated
      interpretation and generation of natural language, but at the time not
      articulated as a problem separate from artificial intelligence.{" "}
    </p>
    <p></p>
    <p>
      The premise of symbolic NLP is well-summarized by John Searle's Chinese
      room experiment: Given a collection of rules (e.g., a Chinese phrasebook,
      with questions and matching answers), the computer emulates natural
      language understanding (or other NLP tasks) by applying those rules to the
      data it is confronted with.{" "}
    </p>
    <p></p>
    <p>
      Up to the 1980s, most natural language processing systems were based on
      complex sets of hand-written rules. Starting in the late 1980s, however,
      there was a revolution in natural language processing with the
      introduction of machine learning algorithms for language processing. This
      was due to both the steady increase in computational power (see Moore's
      law) and the gradual lessening of the dominance of Chomskyan theories of
      linguistics (e.g. transformational grammar), whose theoretical
      underpinnings discouraged the sort of corpus linguistics that underlies
      the machine-learning approach to language processing.{" "}
    </p>
    <p></p>
    <p>
      In the 2010s, representation learning and deep neural network-style
      machine learning methods became widespread in natural language processing,
      due in part to a flurry of results showing that such techniques can
      achieve state-of-the-art results in many natural language tasks, for
      example in language modeling, parsing, and many others.{" "}
    </p>
    <p></p>
    <p>
      In the early days, many language-processing systems were designed by
      symbolic methods, i.e., the hand-coding of a set of rules, coupled with a
      dictionary lookup: such as by writing grammars or devising heuristic rules
      for stemming.{" "}
    </p>
    <p></p>
    <p>
      More recent systems based on machine-learning algorithms have many
      advantages over hand-produced rules:{" "}
    </p>
    <p></p>
    <p>
      Despite the popularity of machine learning in NLP research, symbolic
      methods are still (2020) commonly used{" "}
    </p>
    <p></p>
    <p>
      Since the so-called "statistical revolution" in the late 1980s and
      mid-1990s, much natural language processing research has relied heavily on
      machine learning. The machine-learning paradigm calls instead for using
      statistical inference to automatically learn such rules through the
      analysis of large corpora (the plural form of corpus, is a set of
      documents, possibly with human or computer annotations) of typical
      real-world examples.{" "}
    </p>
    <p></p>
    <p>
      Many different classes of machine-learning algorithms have been applied to
      natural-language-processing tasks. These algorithms take as input a large
      set of "features" that are generated from the input data. Increasingly,
      however, research has focused on statistical models, which make soft,
      probabilistic decisions based on attaching real-valued weights to each
      input feature. Such models have the advantage that they can express the
      relative certainty of many different possible answers rather than only
      one, producing more reliable results when such a model is included as a
      component of a larger system.{" "}
    </p>
    <p></p>
    <p>
      Some of the earliest-used machine learning algorithms, such as decision
      trees, produced systems of hard if-then rules similar to existing
      hand-written rules. However, part-of-speech tagging introduced the use of
      hidden Markov models to natural language processing, and increasingly,
      research has focused on statistical models, which make soft, probabilistic
      decisions based on attaching real-valued weights to the features making up
      the input data. The cache language models upon which many speech
      recognition systems now rely are examples of such statistical models. Such
      models are generally more robust when given unfamiliar input, especially
      input that contains errors (as is very common for real-world data), and
      produce more reliable results when integrated into a larger system
      comprising multiple subtasks.{" "}
    </p>
    <p></p>
    <p>
      Since the neural turn, statistical methods in NLP research have been
      largely replaced by neural networks. However, they continue to be relevant
      for contexts in which statistical interpretability and transparency is
      required.{" "}
    </p>
    <p></p>
    <p>
      A major drawback of statistical methods is that they require elaborate
      feature engineering. Since the early 2010s, the field has thus largely
      abandoned statistical methods and shifted to neural networks for machine
      learning. Popular techniques include the use of word embeddings to capture
      semantic properties of words, and an increase in end-to-end learning of a
      higher-level task (e.g., question answering) instead of relying on a
      pipeline of separate intermediate tasks (e.g., part-of-speech tagging and
      dependency parsing). In some areas, this shift has entailed substantial
      changes in how NLP systems are designed, such that deep neural
      network-based approaches may be viewed as a new paradigm distinct from
      statistical natural language processing. For instance, the term neural
      machine translation (NMT) emphasizes the fact that deep learning-based
      approaches to machine translation directly learn sequence-to-sequence
      transformations, obviating the need for intermediate steps such as word
      alignment and language modeling that was used in statistical machine
      translation (SMT).{" "}
    </p>
    <p></p>
    <p>
      The following is a list of some of the most commonly researched tasks in
      natural language processing. Some of these tasks have direct real-world
      applications, while others more commonly serve as subtasks that are used
      to aid in solving larger tasks.{" "}
    </p>
    <p></p>
    <p>
      Though natural language processing tasks are closely intertwined, they can
      be subdivided into categories for convenience. A coarse division is given
      below.{" "}
    </p>
    <p></p>
    <p>
      Cognition refers to "the mental action or process of acquiring knowledge
      and understanding through thought, experience, and the senses." Cognitive
      science is the interdisciplinary, scientific study of the mind and its
      processes. Cognitive linguistics is an interdisciplinary branch of
      linguistics, combining knowledge and research from both psychology and
      linguistics. George Lakoff offers a methodology to build Natural language
      processing (NLP) algorithms through the perspective of Cognitive science,
      along with the findings of Cognitive linguistics:{" "}
    </p>
    <p></p>
    <p>
      The first defining aspect of this cognitive task of NLP is the application
      of the theory of Conceptual metaphor, explained by Lakoff as “the
      understanding of one idea, in terms of another” which provides an idea of
      the intent of the author.{" "}
    </p>
    <p></p>
    <p>
      For example, consider some of the meanings, in English, of the word “big”.
      When used as a Comparative, as in “That is a big tree,” a likely inference
      of the intent of the author is that the author is using the word “big” to
      imply a statement about the tree being ”physically large” in comparison to
      other trees or the authors experience. When used as a Stative verb, as in
      ”Tomorrow is a big day”, a likely inference of the author’s intent it that
      ”big” is being used to imply ”importance”. These examples are not
      presented to be complete, but merely as indicators of the implication of
      the idea of Conceptual metaphor. The intent behind other usages, like in
      ”She is a big person” will remain somewhat ambiguous to a person and a
      cognitive NLP algorithm alike without additional information.{" "}
    </p>
    <p></p>
    <p>
      This leads to the second defining aspect of this cognitive task of NLP,
      namely Probabilistic context-free grammar (PCFG) which enables cognitive
      NLP algorithms to assign relative measures of meaning to a word, phrase,
      sentence or piece of text based on the information presented before and
      after the piece of text being analyzed. The mathematical equation for such
      algorithms is presented in US patent 9269353 :{" "}
    </p>
    <p></p>
    <p id="wiki-uncolored">
      Where, RMM, is the Relative Measure of Meaning token, is any block of
      text, sentence, phrase or word N, is the number of tokens being analyzed
      PMM, is the Probable Measure of Meaning based on a corpora d, is the
      location of the token along the sequence of N-1 tokens PF, is the
      Probability Function specific to a language{" "}
    </p>
  </FadeIn>
);

export const wiki_article_word_color = (
  <div style={{ backgroundColor: "red" }}>
    <p>
      Natural language processing (NLP) is a subfield of linguistics, computer
      science, and artificial intelligence concerned with the interactions
      between computers and human language, in particular how to program
      computers to process and analyze large amounts of natural language data.{" "}
    </p>
    <p></p>
    <p>
      Challenges in natural language processing frequently involve speech
      recognition, natural language understanding, and natural-language
      generation.{" "}
    </p>
    <p></p>
    <p>
      Natural language processing has its roots in the 1950s. Already in 1950,
      Alan Turing published an article titled "Computing Machinery and
      Intelligence" which proposed what is now called the Turing test as a
      criterion of intelligence, a task that involves the automated
      interpretation and generation of natural language, but at the time not
      articulated as a problem separate from artificial intelligence.{" "}
    </p>
    <p></p>
    <p>
      The premise of symbolic NLP is well-summarized by John Searle's Chinese
      room experiment: Given a collection of rules (e.g., a Chinese phrasebook,
      with questions and matching answers), the computer emulates natural
      language understanding (or other NLP tasks) by applying those rules to the
      data it is confronted with.{" "}
    </p>
    <p></p>
    <p>
      Up to the 1980s, most natural language processing systems were based on
      complex sets of hand-written rules. Starting in the late 1980s, however,
      there was a revolution in natural language processing with the
      introduction of machine learning algorithms for language processing. This
      was due to both the steady increase in computational power (see Moore's
      law) and the gradual lessening of the dominance of Chomskyan theories of
      linguistics (e.g. transformational grammar), whose theoretical
      underpinnings discouraged the sort of corpus linguistics that underlies
      the machine-learning approach to language processing.{" "}
    </p>
    <p></p>
    <p>
      In the 2010s, representation learning and deep neural network-style
      machine learning methods became widespread in natural language processing,
      due in part to a flurry of results showing that such techniques can
      achieve state-of-the-art results in many natural language tasks, for
      example in language modeling, parsing, and many others.{" "}
    </p>
    <p></p>
    <p>
      In the early days, many language-processing systems were designed by
      symbolic methods, i.e., the hand-coding of a set of rules, coupled with a
      dictionary lookup: such as by writing grammars or devising heuristic rules
      for stemming.{" "}
    </p>
    <p></p>
    <p>
      More recent systems based on machine-learning algorithms have many
      advantages over hand-produced rules:{" "}
    </p>
    <p></p>
    <p>
      Despite the popularity of machine learning in NLP research, symbolic
      methods are still (2020) commonly used{" "}
    </p>
    <p></p>
    <p>
      Since the so-called "statistical revolution" in the late 1980s and
      mid-1990s, much natural language processing research has relied heavily on
      machine learning. The machine-learning paradigm calls instead for using
      statistical inference to automatically learn such rules through the
      analysis of large corpora (the plural form of corpus, is a set of
      documents, possibly with human or computer annotations) of typical
      real-world examples.{" "}
    </p>
    <p></p>
    <p>
      Many different classes of machine-learning algorithms have been applied to
      natural-language-processing tasks. These algorithms take as input a large
      set of "features" that are generated from the input data. Increasingly,
      however, research has focused on statistical models, which make soft,
      probabilistic decisions based on attaching real-valued weights to each
      input feature. Such models have the advantage that they can express the
      relative certainty of many different possible answers rather than only
      one, producing more reliable results when such a model is included as a
      component of a larger system.{" "}
    </p>
    <p></p>
    <p>
      Some of the earliest-used machine learning algorithms, such as decision
      trees, produced systems of hard if-then rules similar to existing
      hand-written rules. However, part-of-speech tagging introduced the use of
      hidden Markov models to natural language processing, and increasingly,
      research has focused on statistical models, which make soft, probabilistic
      decisions based on attaching real-valued weights to the features making up
      the input data. The cache language models upon which many speech
      recognition systems now rely are examples of such statistical models. Such
      models are generally more robust when given unfamiliar input, especially
      input that contains errors (as is very common for real-world data), and
      produce more reliable results when integrated into a larger system
      comprising multiple subtasks.{" "}
    </p>
    <p></p>
    <p>
      Since the neural turn, statistical methods in NLP research have been
      largely replaced by neural networks. However, they continue to be relevant
      for contexts in which statistical interpretability and transparency is
      required.{" "}
    </p>
    <p></p>
    <p>
      A major drawback of statistical methods is that they require elaborate
      feature engineering. Since the early 2010s, the field has thus largely
      abandoned statistical methods and shifted to neural networks for machine
      learning. Popular techniques include the use of word embeddings to capture
      semantic properties of words, and an increase in end-to-end learning of a
      higher-level task (e.g., question answering) instead of relying on a
      pipeline of separate intermediate tasks (e.g., part-of-speech tagging and
      dependency parsing). In some areas, this shift has entailed substantial
      changes in how NLP systems are designed, such that deep neural
      network-based approaches may be viewed as a new paradigm distinct from
      statistical natural language processing. For instance, the term neural
      machine translation (NMT) emphasizes the fact that deep learning-based
      approaches to machine translation directly learn sequence-to-sequence
      transformations, obviating the need for intermediate steps such as word
      alignment and language modeling that was used in statistical machine
      translation (SMT).{" "}
    </p>
    <p></p>
    <p>
      The following is a list of some of the most commonly researched tasks in
      natural language processing. Some of these tasks have direct real-world
      applications, while others more commonly serve as subtasks that are used
      to aid in solving larger tasks.{" "}
    </p>
    <p></p>
    <p>
      Though natural language processing tasks are closely intertwined, they can
      be subdivided into categories for convenience. A coarse division is given
      below.{" "}
    </p>
    <p></p>
    <p>
      Cognition refers to "the mental action or process of acquiring knowledge
      and understanding through thought, experience, and the senses." Cognitive
      science is the interdisciplinary, scientific study of the mind and its
      processes. Cognitive linguistics is an interdisciplinary branch of
      linguistics, combining knowledge and research from both psychology and
      linguistics. George Lakoff offers a methodology to build Natural language
      processing (NLP) algorithms through the perspective of Cognitive science,
      along with the findings of Cognitive linguistics:{" "}
    </p>
    <p></p>
    <p>
      The first defining aspect of this cognitive task of NLP is the application
      of the theory of Conceptual metaphor, explained by Lakoff as “the
      understanding of one idea, in terms of another” which provides an idea of
      the intent of the author.{" "}
    </p>
    <p></p>
    <p>
      For example, consider some of the meanings, in English, of the word “big”.
      When used as a Comparative, as in “That is a big tree,” a likely inference
      of the intent of the author is that the author is using the word “big” to
      imply a statement about the tree being ”physically large” in comparison to
      other trees or the authors experience. When used as a Stative verb, as in
      ”Tomorrow is a big day”, a likely inference of the author’s intent it that
      ”big” is being used to imply ”importance”. These examples are not
      presented to be complete, but merely as indicators of the implication of
      the idea of Conceptual metaphor. The intent behind other usages, like in
      ”She is a big person” will remain somewhat ambiguous to a person and a
      cognitive NLP algorithm alike without additional information.{" "}
    </p>
    <p></p>
    <p>
      This leads to the second defining aspect of this cognitive task of NLP,
      namely Probabilistic context-free grammar (PCFG) which enables cognitive
      NLP algorithms to assign relative measures of meaning to a word, phrase,
      sentence or piece of text based on the information presented before and
      after the piece of text being analyzed. The mathematical equation for such
      algorithms is presented in US patent 9269353 :{" "}
    </p>
    <p></p>
    <p>
      Where, RMM, is the Relative Measure of Meaning token, is any block of
      text, sentence, phrase or word N, is the number of tokens being analyzed
      PMM, is the Probable Measure of Meaning based on a corpora d, is the
      location of the token along the sequence of N-1 tokens PF, is the
      Probability Function specific to a language{" "}
    </p>
  </div>
);
