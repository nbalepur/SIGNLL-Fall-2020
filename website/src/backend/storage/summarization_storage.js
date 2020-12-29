import FadeIn from "react-fade-in";

import "../../styles.css";

export const wiki_article = (
  <FadeIn delay={75}>
    <p>
      Natural language processing (NLP) is a subfield of linguistics, computer
      science, and artificial intelligence concerned with the interactions
      between computers and human language, in particular how to program
      computers to process and analyze large amounts of natural language data.{" "}
    </p>
    <p></p>
    <p>
      The result is a computer capable of ‘understanding’ the contents of
      documents, including the contextual nuances of the language within them.{" "}
    </p>
    <p></p>
    <p>
      The technology can then accurately extract information and insights
      contained in the documents as well as categorize and organize the
      documents themselves.{" "}
    </p>
    <p></p>
    <p>
      Challenges in natural language processing frequently involve speech
      recognition, natural language understanding, and natural-language
      generation.{" "}
    </p>
    <p></p>
    <p>Natural language processing has its roots in the 1950s. </p>
    <p></p>
    <p>
      Already in 1950, Alan Turing published an article titled "Computing
      Machinery and Intelligence" which proposed what is now called the Turing
      test as a criterion of intelligence, a task that involves the automated
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
      complex sets of hand-written rules.{" "}
    </p>
    <p></p>
    <p>
      Starting in the late 1980s, however, there was a revolution in natural
      language processing with the introduction of machine learning algorithms
      for language processing.{" "}
    </p>
    <p></p>
    <p>
      This was due to both the steady increase in computational power (see
      Moore's law) and the gradual lessening of the dominance of Chomskyan
      theories of linguistics (e.g.{" "}
    </p>
    <p></p>
    <p>
      transformational grammar), whose theoretical underpinnings discouraged the
      sort of corpus linguistics that underlies the machine-learning approach to
      language processing.{" "}
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
      advantages over hand-produced rules: Despite the popularity of machine
      learning in NLP research, symbolic methods are still (2020) commonly used
      Since the so-called "statistical revolution" in the late 1980s and
      mid-1990s, much natural language processing research has relied heavily on
      machine learning.{" "}
    </p>
    <p></p>
    <p>
      The machine-learning paradigm calls instead for using statistical
      inference to automatically learn such rules through the analysis of large
      corpora (the plural form of corpus, is a set of documents, possibly with
      human or computer annotations) of typical real-world examples.{" "}
    </p>
    <p></p>
    <p>
      Many different classes of machine-learning algorithms have been applied to
      natural-language-processing tasks.{" "}
    </p>
    <p></p>
    <p>
      These algorithms take as input a large set of "features" that are
      generated from the input data.{" "}
    </p>
    <p></p>
    <p>
      Increasingly, however, research has focused on statistical models, which
      make soft, probabilistic decisions based on attaching real-valued weights
      to each input feature.{" "}
    </p>
    <p></p>
    <p>
      Such models have the advantage that they can express the relative
      certainty of many different possible answers rather than only one,
      producing more reliable results when such a model is included as a
      component of a larger system.{" "}
    </p>
    <p></p>
    <p>
      Some of the earliest-used machine learning algorithms, such as decision
      trees, produced systems of hard if-then rules similar to existing
      hand-written rules.{" "}
    </p>
    <p></p>
    <p>
      However, part-of-speech tagging introduced the use of hidden Markov models
      to natural language processing, and increasingly, research has focused on
      statistical models, which make soft, probabilistic decisions based on
      attaching real-valued weights to the features making up the input data.{" "}
    </p>
    <p></p>
    <p>
      The cache language models upon which many speech recognition systems now
      rely are examples of such statistical models.{" "}
    </p>
    <p></p>
    <p>
      Such models are generally more robust when given unfamiliar input,
      especially input that contains errors (as is very common for real-world
      data), and produce more reliable results when integrated into a larger
      system comprising multiple subtasks.{" "}
    </p>
    <p></p>
    <p>
      Since the neural turn, statistical methods in NLP research have been
      largely replaced by neural networks.{" "}
    </p>
    <p></p>
    <p>
      However, they continue to be relevant for contexts in which statistical
      interpretability and transparency is required.{" "}
    </p>
    <p></p>
    <p>
      A major drawback of statistical methods is that they require elaborate
      feature engineering.{" "}
    </p>
    <p></p>
    <p>
      Since the early 2010s, the field has thus largely abandoned statistical
      methods and shifted to neural networks for machine learning.{" "}
    </p>
    <p></p>
    <p>
      Popular techniques include the use of word embeddings to capture semantic
      properties of words, and an increase in end-to-end learning of a
      higher-level task (e.g., question answering) instead of relying on a
      pipeline of separate intermediate tasks (e.g., part-of-speech tagging and
      dependency parsing).{" "}
    </p>
    <p></p>
    <p>
      In some areas, this shift has entailed substantial changes in how NLP
      systems are designed, such that deep neural network-based approaches may
      be viewed as a new paradigm distinct from statistical natural language
      processing.{" "}
    </p>
    <p></p>
    <p>
      For instance, the term neural machine translation (NMT) emphasizes the
      fact that deep learning-based approaches to machine translation directly
      learn sequence-to-sequence transformations, obviating the need for
      intermediate steps such as word alignment and language modeling that was
      used in statistical machine translation (SMT).{" "}
    </p>
    <p></p>
    <p>
      The following is a list of some of the most commonly researched tasks in
      natural language processing.{" "}
    </p>
    <p></p>
    <p>
      Some of these tasks have direct real-world applications, while others more
      commonly serve as subtasks that are used to aid in solving larger tasks.{" "}
    </p>
    <p></p>
    <p>
      Though natural language processing tasks are closely intertwined, they can
      be subdivided into categories for convenience.{" "}
    </p>
    <p></p>
    <p>A coarse division is given below. </p>
    <p></p>
    <p>
      Cognition refers to "the mental action or process of acquiring knowledge
      and understanding through thought, experience, and the senses."{" "}
    </p>
    <p></p>
    <p>
      Cognitive science is the interdisciplinary, scientific study of the mind
      and its processes.{" "}
    </p>
    <p></p>
    <p>
      Cognitive linguistics is an interdisciplinary branch of linguistics,
      combining knowledge and research from both psychology and linguistics.{" "}
    </p>
    <p></p>
    <p>
      George Lakoff offers a methodology to build Natural language processing
      (NLP) algorithms through the perspective of Cognitive science, along with
      the findings of Cognitive linguistics: The first defining aspect of this
      cognitive task of NLP is the application of the theory of Conceptual
      metaphor, explained by Lakoff as “the understanding of one idea, in terms
      of another” which provides an idea of the intent of the author.{" "}
    </p>
    <p></p>
    <p>
      For example, consider some of the meanings, in English, of the word “big”.{" "}
    </p>
    <p></p>
    <p>
      When used as a Comparative, as in “That is a big tree,” a likely inference
      of the intent of the author is that the author is using the word “big” to
      imply a statement about the tree being ”physically large” in comparison to
      other trees or the authors experience.{" "}
    </p>
    <p></p>
    <p>
      When used as a Stative verb, as in ”Tomorrow is a big day”, a likely
      inference of the author’s intent it that ”big” is being used to imply
      ”importance”.{" "}
    </p>
    <p></p>
    <p>
      These examples are not presented to be complete, but merely as indicators
      of the implication of the idea of Conceptual metaphor.{" "}
    </p>
    <p></p>
    <p>
      The intent behind other usages, like in ”She is a big person” will remain
      somewhat ambiguous to a person and a cognitive NLP algorithm alike without
      additional information.{" "}
    </p>
    <p></p>
    <p>
      This leads to the second defining aspect of this cognitive task of NLP,
      namely Probabilistic context-free grammar (PCFG) which enables cognitive
      NLP algorithms to assign relative measures of meaning to a word, phrase,
      sentence or piece of text based on the information presented before and
      after the piece of text being analyzed.{" "}
    </p>
    <p></p>
    <p>
      The mathematical equation for such algorithms is presented in US patent
      9269353 Where, RMM, is the Relative Measure of Meaning token, is any block
      of text, sentence, phrase or word N, is the number of tokens being
      analyzed PMM, is the Probable Measure of Meaning based on a corpora d, is
      the location of the token along the sequence of N-1 tokens PF, is the
      Probability Function specific to a language{" "}
    </p>
    <p></p>
  </FadeIn>
);

export const wiki_article_word_color = (
  <div>
    <p>
      <span class="word-weight #ed8a84 #ef665e">Natural</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f0584f #ef665e">language</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #ed9a95 #ef665e">processing</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #efb3af #ef665e">(NLP)</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">is</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">a</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f6e1e0 #ef665e">subfield</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">of</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f1c6c4 #ef665e">linguistics,</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f3d4d2 #ef665e">computer</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f4d8d6 #ef665e">science,</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">and</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f5dcdb #ef665e">artificial</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f3d4d2 #ef665e">intelligence</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f6e1e0 #ef665e">concerned</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">with</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">the</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f6e1e0 #ef665e">interactions</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">between</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f5dcdb #ef665e">computers</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">and</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f5dcdb #ef665e">human</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f0584f #ef665e">language,</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">in</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f6e1e0 #ef665e">particular</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">how</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">to</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f6e1e0 #ef665e">program</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f5dcdb #ef665e">computers</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">to</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f5dcdb #ef665e">process</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">and</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f6e1e0 #ef665e">analyze</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f3d4d2 #ef665e">large</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f6e1e0 #ef665e">amounts</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f7e5e4 #ef665e">of</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #ed8a84 #ef665e">natural</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f0584f #ef665e">language</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
      <span class="word-weight #f2cfcd #ef665e">data.</span>
      <span class="word-weight #f7e5e4 #ef665e"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #eeb0ac">The</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f6e1e0 #eeb0ac">result</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">is</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">a</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f3d4d2 #eeb0ac">computer</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f6e1e0 #eeb0ac">capable</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">of</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f2cfcd #eeb0ac">‘understanding’</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">the</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f6e1e0 #eeb0ac">contents</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">of</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f3d4d2 #eeb0ac">documents,</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f6e1e0 #eeb0ac">including</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">the</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f6e1e0 #eeb0ac">contextual</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f6e1e0 #eeb0ac">nuances</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">of</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">the</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f0584f #eeb0ac">language</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f6e1e0 #eeb0ac">within</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
      <span class="word-weight #f7e5e4 #eeb0ac">them.</span>
      <span class="word-weight #f7e5e4 #eeb0ac"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f4d7d5">The</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f6e1e0 #f4d7d5">technology</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">can</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">then</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f6e1e0 #f4d7d5">accurately</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f6e1e0 #f4d7d5">extract</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f4d8d6 #f4d7d5">information</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">and</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f6e1e0 #f4d7d5">insights</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f6e1e0 #f4d7d5">contained</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">in</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">the</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f3d4d2 #f4d7d5">documents</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">as</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f5dcdb #f4d7d5">well</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">as</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f6e1e0 #f4d7d5">categorize</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">and</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f6e1e0 #f4d7d5">organize</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">the</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f3d4d2 #f4d7d5">documents</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
      <span class="word-weight #f7e5e4 #f4d7d5">themselves.</span>
      <span class="word-weight #f7e5e4 #f4d7d5"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #ee6b63">Challenges</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f7e5e4 #ee6b63">in</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #ed8a84 #ee6b63">natural</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f0584f #ee6b63">language</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #ed9a95 #ee6b63">processing</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f6e1e0 #ee6b63">frequently</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f6e1e0 #ee6b63">involve</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f3d4d2 #ee6b63">speech</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f5dcdb #ee6b63">recognition,</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #ed8a84 #ee6b63">natural</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f0584f #ee6b63">language</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f2cfcd #ee6b63">understanding,</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f7e5e4 #ee6b63">and</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #ed8a84 #ee6b63">natural-language</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
      <span class="word-weight #f5dcdb #ee6b63">generation.</span>
      <span class="word-weight #f7e5e4 #ee6b63"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #ed8a84 #ed9f9b">Natural</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #f0584f #ed9f9b">language</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #ed9a95 #ed9f9b">processing</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #f7e5e4 #ed9f9b">has</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #f7e5e4 #ed9f9b">its</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #f6e1e0 #ed9f9b">roots</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #f7e5e4 #ed9f9b">in</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #f7e5e4 #ed9f9b">the</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
      <span class="word-weight #f6e1e0 #ed9f9b">1950s.</span>
      <span class="word-weight #f7e5e4 #ed9f9b"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #f7e5e4">Already</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">1950,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Alan</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Turing</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">published</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">an</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">article</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">titled</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">"Computing</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Machinery</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">Intelligence"</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">which</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">proposed</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">what</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">now</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">called</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Turing</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">test</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">as</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">criterion</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">intelligence,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">task</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">that</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">involves</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">automated</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">interpretation</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">generation</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed8a84 #f7e5e4">natural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">but</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">at</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">time</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">not</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">articulated</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">as</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">problem</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">separate</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">from</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">artificial</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">intelligence.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">The</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">premise</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">symbolic</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">NLP</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">well-summarized</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">by</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">John</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Searle's</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Chinese</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">room</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">experiment:</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">Given</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">collection</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0bdba #f7e5e4">rules</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">(e.g.,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Chinese</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">phrasebook,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">with</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">questions</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">matching</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">answers),</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">computer</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">emulates</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed8a84 #f7e5e4">natural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">understanding</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">(or</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">other</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">NLP</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">tasks)</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">by</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">applying</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">those</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0bdba #f7e5e4">rules</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">data</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">it</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">confronted</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">with.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #ed817b">Up</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f7e5e4 #ed817b">to</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f7e5e4 #ed817b">the</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f4d8d6 #ed817b">1980s,</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f7e5e4 #ed817b">most</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #ed8a84 #ed817b">natural</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f0584f #ed817b">language</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #ed9a95 #ed817b">processing</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f2cbc8 #ed817b">systems</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f7e5e4 #ed817b">were</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f0c1bf #ed817b">based</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f7e5e4 #ed817b">on</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f6e1e0 #ed817b">complex</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f6e1e0 #ed817b">sets</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f7e5e4 #ed817b">of</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f3d4d2 #ed817b">hand-written</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
      <span class="word-weight #f0bdba #ed817b">rules.</span>
      <span class="word-weight #f7e5e4 #ed817b"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #ee6f68">Starting</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">in</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">the</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f5dcdb #ee6f68">late</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f4d8d6 #ee6f68">1980s,</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f3d4d2 #ee6f68">however,</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">there</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">was</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">a</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f5dcdb #ee6f68">revolution</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">in</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #ed8a84 #ee6f68">natural</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f0584f #ee6f68">language</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #ed9a95 #ee6f68">processing</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">with</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">the</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f6e1e0 #ee6f68">introduction</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">of</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #eea9a5 #ee6f68">machine</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #eea9a5 #ee6f68">learning</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f0c1bf #ee6f68">algorithms</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f7e5e4 #ee6f68">for</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #f0584f #ee6f68">language</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
      <span class="word-weight #ed9a95 #ee6f68">processing.</span>
      <span class="word-weight #f7e5e4 #ee6f68"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f2cbc9">This</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">was</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f5dcdb #f2cbc9">due</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">to</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">both</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">the</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">steady</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f5dcdb #f2cbc9">increase</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">in</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">computational</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">power</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">(see</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">Moore's</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">law)</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">and</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">the</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">gradual</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">lessening</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">of</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">the</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">dominance</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">of</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">Chomskyan</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f6e1e0 #f2cbc9">theories</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f7e5e4 #f2cbc9">of</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f1c6c4 #f2cbc9">linguistics</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
      <span class="word-weight #f2cfcd #f2cbc9">(e.g.</span>
      <span class="word-weight #f7e5e4 #f2cbc9"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #ed8680">transformational</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f5dcdb #ed8680">grammar),</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f6e1e0 #ed8680">whose</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f6e1e0 #ed8680">theoretical</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f6e1e0 #ed8680">underpinnings</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f6e1e0 #ed8680">discouraged</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f7e5e4 #ed8680">the</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f6e1e0 #ed8680">sort</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f7e5e4 #ed8680">of</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f5dcdb #ed8680">corpus</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f1c6c4 #ed8680">linguistics</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f7e5e4 #ed8680">that</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f6e1e0 #ed8680">underlies</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f7e5e4 #ed8680">the</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #eea9a5 #ed8680">machine-learning</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f6e1e0 #ed8680">approach</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f7e5e4 #ed8680">to</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #f0584f #ed8680">language</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
      <span class="word-weight #ed9a95 #ed8680">processing.</span>
      <span class="word-weight #f7e5e4 #ed8680"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">In</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">2010s,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">representation</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">learning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">deep</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">neural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">network-style</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">learning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">methods</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">became</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">widespread</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed8a84 #f7e5e4">natural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed9a95 #f7e5e4">processing,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">due</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">part</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">flurry</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">results</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">showing</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">that</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">such</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">techniques</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">can</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">achieve</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">state-of-the-art</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">results</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">many</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed8a84 #f7e5e4">natural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">tasks,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">for</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">example</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">modeling,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">parsing,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">many</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">others.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #ed7d76">In</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">the</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f5dcdb #ed7d76">early</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">days,</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f1c6c4 #ed7d76">many</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f0584f #ed7d76">language-processing</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f2cbc8 #ed7d76">systems</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">were</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f5dcdb #ed7d76">designed</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">by</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f4d8d6 #ed7d76">symbolic</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f2cbc8 #ed7d76">methods,</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">i.e.,</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">the</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f3d4d2 #ed7d76">hand-coding</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">of</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">a</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f4d8d6 #ed7d76">set</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">of</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f0bdba #ed7d76">rules,</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">coupled</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">with</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">a</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">dictionary</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">lookup:</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">such</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">as</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">by</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">writing</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">grammars</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">or</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">devising</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">heuristic</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f0bdba #ed7d76">rules</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f7e5e4 #ed7d76">for</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
      <span class="word-weight #f6e1e0 #ed7d76">stemming.</span>
      <span class="word-weight #f7e5e4 #ed7d76"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">More</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">recent</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">systems</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">based</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">on</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine-learning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">algorithms</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">have</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">many</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">advantages</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">over</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">hand-produced</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0bdba #f7e5e4">rules:</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Despite</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">popularity</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">learning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">NLP</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">research,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">symbolic</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">methods</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">are</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">still</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">(2020)</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">commonly</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">used</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">Since</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">so-called</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">"statistical</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">revolution"</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">late</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">1980s</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">mid-1990s,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">much</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed8a84 #f7e5e4">natural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed9a95 #f7e5e4">processing</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">research</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">has</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">relied</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">heavily</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">on</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">learning.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">The</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine-learning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">paradigm</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">calls</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">instead</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">for</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">using</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">statistical</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">inference</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">automatically</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">learn</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">such</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0bdba #f7e5e4">rules</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">through</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">analysis</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">large</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">corpora</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">(the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">plural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">form</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">corpus,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">set</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">documents,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">possibly</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">with</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">human</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">or</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">computer</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">annotations)</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">typical</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">real-world</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">examples.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f1c6c4 #ee7872">Many</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f5dcdb #ee7872">different</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f6e1e0 #ee7872">classes</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f7e5e4 #ee7872">of</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #eea9a5 #ee7872">machine-learning</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f0c1bf #ee7872">algorithms</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f7e5e4 #ee7872">have</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f7e5e4 #ee7872">been</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f6e1e0 #ee7872">applied</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f7e5e4 #ee7872">to</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #ed8a84 #ee7872">
        natural-language-processing
      </span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
      <span class="word-weight #f0c1bf #ee7872">tasks.</span>
      <span class="word-weight #f7e5e4 #ee7872"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f1c8c5">These</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f0c1bf #f1c8c5">algorithms</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f6e1e0 #f1c8c5">take</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f7e5e4 #f1c8c5">as</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f2cbc8 #f1c8c5">input</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f7e5e4 #f1c8c5">a</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f3d4d2 #f1c8c5">large</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f4d8d6 #f1c8c5">set</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f7e5e4 #f1c8c5">of</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f5dcdb #f1c8c5">"features"</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f7e5e4 #f1c8c5">that</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f7e5e4 #f1c8c5">are</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f6e1e0 #f1c8c5">generated</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f7e5e4 #f1c8c5">from</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f7e5e4 #f1c8c5">the</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f2cbc8 #f1c8c5">input</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
      <span class="word-weight #f2cfcd #f1c8c5">data.</span>
      <span class="word-weight #f7e5e4 #f1c8c5"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f5dcdb #ed9b97">Increasingly,</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f3d4d2 #ed9b97">however,</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f2cbc8 #ed9b97">research</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f7e5e4 #ed9b97">has</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f5dcdb #ed9b97">focused</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f7e5e4 #ed9b97">on</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #efb3af #ed9b97">statistical</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f1c6c4 #ed9b97">models,</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f7e5e4 #ed9b97">which</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f5dcdb #ed9b97">make</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f5dcdb #ed9b97">soft,</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f4d8d6 #ed9b97">probabilistic</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f5dcdb #ed9b97">decisions</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f0c1bf #ed9b97">based</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f7e5e4 #ed9b97">on</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f5dcdb #ed9b97">attaching</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f2cfcd #ed9b97">real-valued</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f5dcdb #ed9b97">weights</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f7e5e4 #ed9b97">to</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f7e5e4 #ed9b97">each</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f2cbc8 #ed9b97">input</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
      <span class="word-weight #f5dcdb #ed9b97">feature.</span>
      <span class="word-weight #f7e5e4 #ed9b97"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f0c0bd">Such</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f1c6c4 #f0c0bd">models</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">have</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">the</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">advantage</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">that</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">they</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">can</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">express</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">the</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f4d8d6 #f0c0bd">relative</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">certainty</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">of</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f1c6c4 #f0c0bd">many</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f5dcdb #f0c0bd">different</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">possible</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f5dcdb #f0c0bd">answers</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">rather</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">than</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">only</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f5dcdb #f0c0bd">one,</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">producing</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">more</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f5dcdb #f0c0bd">reliable</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f3d4d2 #f0c0bd">results</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">when</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">such</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">a</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">model</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">is</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">included</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">as</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">a</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f6e1e0 #f0c0bd">component</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">of</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f7e5e4 #f0c0bd">a</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f4d8d6 #f0c0bd">larger</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
      <span class="word-weight #f5dcdb #f0c0bd">system.</span>
      <span class="word-weight #f7e5e4 #f0c0bd"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #ed8a84">Some</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f7e5e4 #ed8a84">of</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f7e5e4 #ed8a84">the</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f6e1e0 #ed8a84">earliest-used</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #eea9a5 #ed8a84">machine</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #eea9a5 #ed8a84">learning</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f0c1bf #ed8a84">algorithms,</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f7e5e4 #ed8a84">such</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f7e5e4 #ed8a84">as</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f6e1e0 #ed8a84">decision</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f5dcdb #ed8a84">trees,</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f5dcdb #ed8a84">produced</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f2cbc8 #ed8a84">systems</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f7e5e4 #ed8a84">of</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f6e1e0 #ed8a84">hard</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f7e5e4 #ed8a84">if-then</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f0bdba #ed8a84">rules</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f6e1e0 #ed8a84">similar</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f7e5e4 #ed8a84">to</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f6e1e0 #ed8a84">existing</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f3d4d2 #ed8a84">hand-written</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
      <span class="word-weight #f0bdba #ed8a84">rules.</span>
      <span class="word-weight #f7e5e4 #ed8a84"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f3d4d2 #f7e5e4">However,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">part-of-speech</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">tagging</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">introduced</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">use</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">hidden</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Markov</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">models</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed8a84 #f7e5e4">natural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed9a95 #f7e5e4">processing,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">increasingly,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">research</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">has</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">focused</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">on</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">statistical</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">models,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">which</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">make</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">soft,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">probabilistic</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">decisions</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">based</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">on</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">attaching</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">real-valued</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">weights</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">features</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">making</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">up</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">input</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">data.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #ed8e89">The</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f6e1e0 #ed8e89">cache</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f0584f #ed8e89">language</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f1c6c4 #ed8e89">models</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f6e1e0 #ed8e89">upon</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f7e5e4 #ed8e89">which</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f1c6c4 #ed8e89">many</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f3d4d2 #ed8e89">speech</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f5dcdb #ed8e89">recognition</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f2cbc8 #ed8e89">systems</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f7e5e4 #ed8e89">now</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f6e1e0 #ed8e89">rely</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f7e5e4 #ed8e89">are</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f4d8d6 #ed8e89">examples</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f7e5e4 #ed8e89">of</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f7e5e4 #ed8e89">such</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #efb3af #ed8e89">statistical</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
      <span class="word-weight #f1c6c4 #ed8e89">models.</span>
      <span class="word-weight #f7e5e4 #ed8e89"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #eea8a4">Such</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f1c6c4 #eea8a4">models</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">are</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">generally</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">more</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">robust</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">when</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f4d8d6 #eea8a4">given</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">unfamiliar</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f2cbc8 #eea8a4">input,</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">especially</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f2cbc8 #eea8a4">input</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">that</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">contains</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">errors</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">(as</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">is</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">very</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">common</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">for</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f2cfcd #eea8a4">real-world</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f2cfcd #eea8a4">data),</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">and</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">produce</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">more</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f5dcdb #eea8a4">reliable</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f3d4d2 #eea8a4">results</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">when</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">integrated</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">into</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f7e5e4 #eea8a4">a</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f4d8d6 #eea8a4">larger</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f5dcdb #eea8a4">system</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">comprising</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f6e1e0 #eea8a4">multiple</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
      <span class="word-weight #f5dcdb #eea8a4">subtasks.</span>
      <span class="word-weight #f7e5e4 #eea8a4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f4d8d6 #eeaca8">Since</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f7e5e4 #eeaca8">the</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f2cbc8 #eeaca8">neural</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f6e1e0 #eeaca8">turn,</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #efb3af #eeaca8">statistical</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f2cbc8 #eeaca8">methods</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f7e5e4 #eeaca8">in</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #efb3af #eeaca8">NLP</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f2cbc8 #eeaca8">research</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f7e5e4 #eeaca8">have</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f7e5e4 #eeaca8">been</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f5dcdb #eeaca8">largely</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f6e1e0 #eeaca8">replaced</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f7e5e4 #eeaca8">by</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f2cbc8 #eeaca8">neural</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
      <span class="word-weight #f5dcdb #eeaca8">networks.</span>
      <span class="word-weight #f7e5e4 #eeaca8"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f3d4d2 #f3d3d1">However,</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">they</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f6e1e0 #f3d3d1">continue</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">to</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">be</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f6e1e0 #f3d3d1">relevant</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">for</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f6e1e0 #f3d3d1">contexts</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">in</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">which</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #efb3af #f3d3d1">statistical</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f6e1e0 #f3d3d1">interpretability</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">and</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f6e1e0 #f3d3d1">transparency</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f7e5e4 #f3d3d1">is</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
      <span class="word-weight #f6e1e0 #f3d3d1">required.</span>
      <span class="word-weight #f7e5e4 #f3d3d1"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f2cfcd">A</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f6e1e0 #f2cfcd">major</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f6e1e0 #f2cfcd">drawback</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f7e5e4 #f2cfcd">of</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #efb3af #f2cfcd">statistical</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f2cbc8 #f2cfcd">methods</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f7e5e4 #f2cfcd">is</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f7e5e4 #f2cfcd">that</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f7e5e4 #f2cfcd">they</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f6e1e0 #f2cfcd">require</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f6e1e0 #f2cfcd">elaborate</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f5dcdb #f2cfcd">feature</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
      <span class="word-weight #f6e1e0 #f2cfcd">engineering.</span>
      <span class="word-weight #f7e5e4 #f2cfcd"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f4d8d6 #eea49f">Since</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f7e5e4 #eea49f">the</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f5dcdb #eea49f">early</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f5dcdb #eea49f">2010s,</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f7e5e4 #eea49f">the</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f6e1e0 #eea49f">field</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f7e5e4 #eea49f">has</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f6e1e0 #eea49f">thus</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f5dcdb #eea49f">largely</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f6e1e0 #eea49f">abandoned</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #efb3af #eea49f">statistical</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f2cbc8 #eea49f">methods</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f7e5e4 #eea49f">and</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f6e1e0 #eea49f">shifted</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f7e5e4 #eea49f">to</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f2cbc8 #eea49f">neural</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f5dcdb #eea49f">networks</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #f7e5e4 #eea49f">for</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #eea9a5 #eea49f">machine</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
      <span class="word-weight #eea9a5 #eea49f">learning.</span>
      <span class="word-weight #f7e5e4 #eea49f"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #f7e5e4">Popular</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">techniques</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">include</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">use</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">word</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">embeddings</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">capture</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">semantic</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">properties</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">words,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">an</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">increase</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">end-to-end</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">learning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">higher-level</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">task</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">(e.g.,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">question</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">answering)</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">instead</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">relying</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">on</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">pipeline</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">separate</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">intermediate</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">tasks</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">(e.g.,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">part-of-speech</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">tagging</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">dependency</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">parsing).</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #ee746d">In</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">some</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">areas,</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">this</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">shift</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">has</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">entailed</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">substantial</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">changes</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">in</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">how</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #efb3af #ee746d">NLP</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f2cbc8 #ee746d">systems</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">are</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f5dcdb #ee746d">designed,</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">such</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">that</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f4d8d6 #ee746d">deep</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f2cbc8 #ee746d">neural</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f5dcdb #ee746d">network-based</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f5dcdb #ee746d">approaches</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">may</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">be</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">viewed</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">as</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">a</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">new</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f5dcdb #ee746d">paradigm</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f6e1e0 #ee746d">distinct</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f7e5e4 #ee746d">from</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #efb3af #ee746d">statistical</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #ed8a84 #ee746d">natural</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #f0584f #ee746d">language</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
      <span class="word-weight #ed9a95 #ee746d">processing.</span>
      <span class="word-weight #f7e5e4 #ee746d"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">For</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">instance,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">term</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">neural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">translation</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">(NMT)</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">emphasizes</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">fact</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">that</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">deep</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">learning-based</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">approaches</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">translation</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">directly</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">learn</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">sequence-to-sequence</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">transformations,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">obviating</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">need</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">for</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">intermediate</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">steps</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">such</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">as</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">word</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">alignment</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">modeling</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">that</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">was</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">used</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">statistical</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #eea9a5 #f7e5e4">machine</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">translation</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">(SMT).</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #ed938d">The</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f6e1e0 #ed938d">following</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">is</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">a</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f6e1e0 #ed938d">list</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">of</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">some</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">of</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">the</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">most</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f4d8d6 #ed938d">commonly</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f6e1e0 #ed938d">researched</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f0c1bf #ed938d">tasks</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f7e5e4 #ed938d">in</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #ed8a84 #ed938d">natural</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #f0584f #ed938d">language</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
      <span class="word-weight #ed9a95 #ed938d">processing.</span>
      <span class="word-weight #f7e5e4 #ed938d"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #efb8b5">Some</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">of</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">these</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f0c1bf #efb8b5">tasks</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">have</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f6e1e0 #efb8b5">direct</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f2cfcd #efb8b5">real-world</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f6e1e0 #efb8b5">applications,</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">while</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f5dcdb #efb8b5">others</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">more</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f4d8d6 #efb8b5">commonly</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f6e1e0 #efb8b5">serve</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">as</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f5dcdb #efb8b5">subtasks</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">that</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">are</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f1c6c4 #efb8b5">used</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">to</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f6e1e0 #efb8b5">aid</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f7e5e4 #efb8b5">in</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f6e1e0 #efb8b5">solving</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f4d8d6 #efb8b5">larger</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
      <span class="word-weight #f0c1bf #efb8b5">tasks.</span>
      <span class="word-weight #f7e5e4 #efb8b5"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #ed9792">Though</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #ed8a84 #ed9792">natural</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f0584f #ed9792">language</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #ed9a95 #ed9792">processing</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f0c1bf #ed9792">tasks</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f7e5e4 #ed9792">are</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f6e1e0 #ed9792">closely</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f6e1e0 #ed9792">intertwined,</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f7e5e4 #ed9792">they</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f7e5e4 #ed9792">can</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f7e5e4 #ed9792">be</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f6e1e0 #ed9792">subdivided</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f7e5e4 #ed9792">into</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f6e1e0 #ed9792">categories</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f7e5e4 #ed9792">for</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
      <span class="word-weight #f6e1e0 #ed9792">convenience.</span>
      <span class="word-weight #f7e5e4 #ed9792"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f6e1e0">A</span>
      <span class="word-weight #f7e5e4 #f6e1e0"> </span>
      <span class="word-weight #f6e1e0 #f6e1e0">coarse</span>
      <span class="word-weight #f7e5e4 #f6e1e0"> </span>
      <span class="word-weight #f6e1e0 #f6e1e0">division</span>
      <span class="word-weight #f7e5e4 #f6e1e0"> </span>
      <span class="word-weight #f7e5e4 #f6e1e0">is</span>
      <span class="word-weight #f7e5e4 #f6e1e0"> </span>
      <span class="word-weight #f4d8d6 #f6e1e0">given</span>
      <span class="word-weight #f7e5e4 #f6e1e0"> </span>
      <span class="word-weight #f7e5e4 #f6e1e0">below.</span>
      <span class="word-weight #f7e5e4 #f6e1e0"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #f4dad9">Cognition</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f6e1e0 #f4dad9">refers</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">to</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">"the</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f6e1e0 #f4dad9">mental</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f6e1e0 #f4dad9">action</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">or</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f5dcdb #f4dad9">process</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">of</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f6e1e0 #f4dad9">acquiring</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f5dcdb #f4dad9">knowledge</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">and</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f2cfcd #f4dad9">understanding</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">through</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f6e1e0 #f4dad9">thought,</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f5dcdb #f4dad9">experience,</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">and</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f7e5e4 #f4dad9">the</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
      <span class="word-weight #f6e1e0 #f4dad9">senses."</span>
      <span class="word-weight #f7e5e4 #f4dad9"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f0c1bf #f5dedd">Cognitive</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f4d8d6 #f5dedd">science</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">is</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">the</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f5dcdb #f5dedd">interdisciplinary,</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">scientific</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">study</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">of</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">the</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">mind</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">and</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">its</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">processes.</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f0c1bf #f1c4c1">Cognitive</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f1c6c4 #f1c4c1">linguistics</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f7e5e4 #f1c4c1">is</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f7e5e4 #f1c4c1">an</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f5dcdb #f1c4c1">interdisciplinary</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f6e1e0 #f1c4c1">branch</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f7e5e4 #f1c4c1">of</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f1c6c4 #f1c4c1">linguistics,</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f6e1e0 #f1c4c1">combining</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f5dcdb #f1c4c1">knowledge</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f7e5e4 #f1c4c1">and</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f2cbc8 #f1c4c1">research</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f7e5e4 #f1c4c1">from</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f7e5e4 #f1c4c1">both</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f6e1e0 #f1c4c1">psychology</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f7e5e4 #f1c4c1">and</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
      <span class="word-weight #f1c6c4 #f1c4c1">linguistics.</span>
      <span class="word-weight #f7e5e4 #f1c4c1"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f6e1e0 #f7e5e4">George</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Lakoff</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">offers</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">methodology</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">build</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed8a84 #f7e5e4">Natural</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #ed9a95 #f7e5e4">processing</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">(NLP)</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">algorithms</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">through</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">perspective</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">Cognitive</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">science,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">along</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">with</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">findings</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">Cognitive</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">linguistics:</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">The</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">first</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">defining</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">aspect</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">this</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">cognitive</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">task</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">NLP</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">application</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">theory</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Conceptual</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">metaphor,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">explained</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">by</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Lakoff</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">as</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">“the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cfcd #f7e5e4">understanding</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">one</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">idea,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">terms</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">another”</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">which</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">provides</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">an</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">idea</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">intent</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">author.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f5dedd">For</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f5dcdb #f5dedd">example,</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">consider</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">some</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">of</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">the</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">meanings,</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">in</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">English,</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">of</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">the</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f2cbc8 #f5dedd">word</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f2cbc8 #f5dedd">“big”.</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">When</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f1c6c4 #f7e5e4">used</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">as</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Comparative,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">as</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">“That</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">big</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">tree,”</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">likely</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">inference</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">intent</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">author</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">that</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">author</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">using</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">word</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">“big”</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">imply</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">statement</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">about</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">tree</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">being</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">”physically</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">large”</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">comparison</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">other</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">trees</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">or</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">authors</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">experience.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f0bcb9">When</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f1c6c4 #f0bcb9">used</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">as</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">a</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f6e1e0 #f0bcb9">Stative</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f6e1e0 #f0bcb9">verb,</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">as</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">in</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f6e1e0 #f0bcb9">”Tomorrow</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">is</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">a</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f2cbc8 #f0bcb9">big</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f6e1e0 #f0bcb9">day”,</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">a</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f5dcdb #f0bcb9">likely</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f4d8d6 #f0bcb9">inference</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">of</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">the</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f3d4d2 #f0bcb9">author’s</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f3d4d2 #f0bcb9">intent</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">it</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">that</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f2cbc8 #f0bcb9">”big”</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">is</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">being</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f1c6c4 #f0bcb9">used</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f7e5e4 #f0bcb9">to</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f5dcdb #f0bcb9">imply</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
      <span class="word-weight #f6e1e0 #f0bcb9">”importance”.</span>
      <span class="word-weight #f7e5e4 #f0bcb9"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f5dedd">These</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f4d8d6 #f5dedd">examples</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">are</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">not</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f4d8d6 #f5dedd">presented</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">to</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">be</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">complete,</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">but</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">merely</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">as</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">indicators</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">of</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">the</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f6e1e0 #f5dedd">implication</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">of</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">the</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f4d8d6 #f5dedd">idea</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f7e5e4 #f5dedd">of</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f5dcdb #f5dedd">Conceptual</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
      <span class="word-weight #f5dcdb #f5dedd">metaphor.</span>
      <span class="word-weight #f7e5e4 #f5dedd"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #efb4b1">The</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f3d4d2 #efb4b1">intent</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">behind</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">other</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">usages,</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">like</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">in</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">”She</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">is</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">a</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f2cbc8 #efb4b1">big</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f5dcdb #efb4b1">person”</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">will</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">remain</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">somewhat</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">ambiguous</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">to</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">a</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f5dcdb #efb4b1">person</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">and</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f7e5e4 #efb4b1">a</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f0c1bf #efb4b1">cognitive</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #efb3af #efb4b1">NLP</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">algorithm</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">alike</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">without</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f6e1e0 #efb4b1">additional</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
      <span class="word-weight #f4d8d6 #efb4b1">information.</span>
      <span class="word-weight #f7e5e4 #efb4b1"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">This</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">leads</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">second</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">defining</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">aspect</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">this</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">cognitive</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f3d4d2 #f7e5e4">task</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">NLP,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">namely</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">Probabilistic</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">context-free</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">grammar</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">(PCFG)</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">which</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">enables</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">cognitive</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #efb3af #f7e5e4">NLP</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">algorithms</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">assign</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">relative</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">measures</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">meaning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">word,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">phrase,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">sentence</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">or</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">piece</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">text</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">based</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">on</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">information</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">presented</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">before</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">and</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">after</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">piece</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">text</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">being</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">analyzed.</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
    <p>
      <span class="word-weight #f7e5e4 #f7e5e4">The</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">mathematical</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">equation</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">for</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">such</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">algorithms</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">presented</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">in</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">US</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">patent</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">9269353</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">Where,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">RMM,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">Relative</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Measure</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">Meaning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">token,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">any</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">block</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">text,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">sentence,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">phrase</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">or</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f2cbc8 #f7e5e4">word</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">N,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">number</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">tokens</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">being</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">analyzed</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">PMM,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Probable</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">Measure</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">Meaning</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0c1bf #f7e5e4">based</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">on</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">corpora</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">d,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">location</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">token</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">along</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f4d8d6 #f7e5e4">sequence</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">of</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">N-1</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f5dcdb #f7e5e4">tokens</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">PF,</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">is</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">the</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Probability</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">Function</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f6e1e0 #f7e5e4">specific</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">to</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f7e5e4 #f7e5e4">a</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
      <span class="word-weight #f0584f #f7e5e4">language</span>
      <span class="word-weight #f7e5e4 #f7e5e4"> </span>
    </p>
    <p></p>
  </div>
);

export const wiki_sentence_unsorted = [
  <p>
    <span style={{ backgroundColor: "#ef665e" }}>
      Natural language processing (NLP) is a subfield of linguistics, computer
      science, and artificial intelligence concerned with the interactions
      between computers and human language, in particular how to program
      computers to process and analyze large amounts of natural language data.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eeb0ac" }}>
      The result is a computer capable of ‘understanding’ the contents of
      documents, including the contextual nuances of the language within them.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f4d7d5" }}>
      The technology can then accurately extract information and insights
      contained in the documents as well as categorize and organize the
      documents themselves.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee6b63" }}>
      Challenges in natural language processing frequently involve speech
      recognition, natural language understanding, and natural-language
      generation.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed9f9b" }}>
      Natural language processing has its roots in the 1950s.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      Already in 1950, Alan Turing published an article titled "Computing
      Machinery and Intelligence" which proposed what is now called the Turing
      test as a criterion of intelligence, a task that involves the automated
      interpretation and generation of natural language, but at the time not
      articulated as a problem separate from artificial intelligence.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      The premise of symbolic NLP is well-summarized by John Searle's Chinese
      room experiment: Given a collection of rules (e.g., a Chinese phrasebook,
      with questions and matching answers), the computer emulates natural
      language understanding (or other NLP tasks) by applying those rules to the
      data it is confronted with.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed817b" }}>
      Up to the 1980s, most natural language processing systems were based on
      complex sets of hand-written rules.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee6f68" }}>
      Starting in the late 1980s, however, there was a revolution in natural
      language processing with the introduction of machine learning algorithms
      for language processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f2cbc9" }}>
      This was due to both the steady increase in computational power (see
      Moore's law) and the gradual lessening of the dominance of Chomskyan
      theories of linguistics (e.g.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed8680" }}>
      transformational grammar), whose theoretical underpinnings discouraged the
      sort of corpus linguistics that underlies the machine-learning approach to
      language processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      In the 2010s, representation learning and deep neural network-style
      machine learning methods became widespread in natural language processing,
      due in part to a flurry of results showing that such techniques can
      achieve state-of-the-art results in many natural language tasks, for
      example in language modeling, parsing, and many others.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed7d76" }}>
      In the early days, many language-processing systems were designed by
      symbolic methods, i.e., the hand-coding of a set of rules, coupled with a
      dictionary lookup: such as by writing grammars or devising heuristic rules
      for stemming.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      More recent systems based on machine-learning algorithms have many
      advantages over hand-produced rules: Despite the popularity of machine
      learning in NLP research, symbolic methods are still (2020) commonly used
      Since the so-called "statistical revolution" in the late 1980s and
      mid-1990s, much natural language processing research has relied heavily on
      machine learning.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      The machine-learning paradigm calls instead for using statistical
      inference to automatically learn such rules through the analysis of large
      corpora (the plural form of corpus, is a set of documents, possibly with
      human or computer annotations) of typical real-world examples.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee7872" }}>
      Many different classes of machine-learning algorithms have been applied to
      natural-language-processing tasks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f1c8c5" }}>
      These algorithms take as input a large set of "features" that are
      generated from the input data.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed9b97" }}>
      Increasingly, however, research has focused on statistical models, which
      make soft, probabilistic decisions based on attaching real-valued weights
      to each input feature.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f0c0bd" }}>
      Such models have the advantage that they can express the relative
      certainty of many different possible answers rather than only one,
      producing more reliable results when such a model is included as a
      component of a larger system.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed8a84" }}>
      Some of the earliest-used machine learning algorithms, such as decision
      trees, produced systems of hard if-then rules similar to existing
      hand-written rules.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      However, part-of-speech tagging introduced the use of hidden Markov models
      to natural language processing, and increasingly, research has focused on
      statistical models, which make soft, probabilistic decisions based on
      attaching real-valued weights to the features making up the input data.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed8e89" }}>
      The cache language models upon which many speech recognition systems now
      rely are examples of such statistical models.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eea8a4" }}>
      Such models are generally more robust when given unfamiliar input,
      especially input that contains errors (as is very common for real-world
      data), and produce more reliable results when integrated into a larger
      system comprising multiple subtasks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eeaca8" }}>
      Since the neural turn, statistical methods in NLP research have been
      largely replaced by neural networks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f3d3d1" }}>
      However, they continue to be relevant for contexts in which statistical
      interpretability and transparency is required.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f2cfcd" }}>
      A major drawback of statistical methods is that they require elaborate
      feature engineering.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eea49f" }}>
      Since the early 2010s, the field has thus largely abandoned statistical
      methods and shifted to neural networks for machine learning.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      Popular techniques include the use of word embeddings to capture semantic
      properties of words, and an increase in end-to-end learning of a
      higher-level task (e.g., question answering) instead of relying on a
      pipeline of separate intermediate tasks (e.g., part-of-speech tagging and
      dependency parsing).{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee746d" }}>
      In some areas, this shift has entailed substantial changes in how NLP
      systems are designed, such that deep neural network-based approaches may
      be viewed as a new paradigm distinct from statistical natural language
      processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      For instance, the term neural machine translation (NMT) emphasizes the
      fact that deep learning-based approaches to machine translation directly
      learn sequence-to-sequence transformations, obviating the need for
      intermediate steps such as word alignment and language modeling that was
      used in statistical machine translation (SMT).{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed938d" }}>
      The following is a list of some of the most commonly researched tasks in
      natural language processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#efb8b5" }}>
      Some of these tasks have direct real-world applications, while others more
      commonly serve as subtasks that are used to aid in solving larger tasks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed9792" }}>
      Though natural language processing tasks are closely intertwined, they can
      be subdivided into categories for convenience.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f6e1e0" }}>
      A coarse division is given below.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f4dad9" }}>
      Cognition refers to "the mental action or process of acquiring knowledge
      and understanding through thought, experience, and the senses."{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f5dedd" }}>
      Cognitive science is the interdisciplinary, scientific study of the mind
      and its processes.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f1c4c1" }}>
      Cognitive linguistics is an interdisciplinary branch of linguistics,
      combining knowledge and research from both psychology and linguistics.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      George Lakoff offers a methodology to build Natural language processing
      (NLP) algorithms through the perspective of Cognitive science, along with
      the findings of Cognitive linguistics: The first defining aspect of this
      cognitive task of NLP is the application of the theory of Conceptual
      metaphor, explained by Lakoff as “the understanding of one idea, in terms
      of another” which provides an idea of the intent of the author.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f5dedd" }}>
      For example, consider some of the meanings, in English, of the word “big”.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      When used as a Comparative, as in “That is a big tree,” a likely inference
      of the intent of the author is that the author is using the word “big” to
      imply a statement about the tree being ”physically large” in comparison to
      other trees or the authors experience.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f0bcb9" }}>
      When used as a Stative verb, as in ”Tomorrow is a big day”, a likely
      inference of the author’s intent it that ”big” is being used to imply
      ”importance”.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f5dedd" }}>
      These examples are not presented to be complete, but merely as indicators
      of the implication of the idea of Conceptual metaphor.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#efb4b1" }}>
      The intent behind other usages, like in ”She is a big person” will remain
      somewhat ambiguous to a person and a cognitive NLP algorithm alike without
      additional information.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      This leads to the second defining aspect of this cognitive task of NLP,
      namely Probabilistic context-free grammar (PCFG) which enables cognitive
      NLP algorithms to assign relative measures of meaning to a word, phrase,
      sentence or piece of text based on the information presented before and
      after the piece of text being analyzed.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      The mathematical equation for such algorithms is presented in US patent
      9269353 Where, RMM, is the Relative Measure of Meaning token, is any block
      of text, sentence, phrase or word N, is the number of tokens being
      analyzed PMM, is the Probable Measure of Meaning based on a corpora d, is
      the location of the token along the sequence of N-1 tokens PF, is the
      Probability Function specific to a language{" "}
    </span>
  </p>,
];

export const wiki_sentence_sorted = [
  <p>
    <span style={{ backgroundColor: "#ef665e" }}>
      Natural language processing (NLP) is a subfield of linguistics, computer
      science, and artificial intelligence concerned with the interactions
      between computers and human language, in particular how to program
      computers to process and analyze large amounts of natural language data.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee6b63" }}>
      Challenges in natural language processing frequently involve speech
      recognition, natural language understanding, and natural-language
      generation.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee6f68" }}>
      Starting in the late 1980s, however, there was a revolution in natural
      language processing with the introduction of machine learning algorithms
      for language processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee746d" }}>
      Many different classes of machine-learning algorithms have been applied to
      natural-language-processing tasks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ee7872" }}>
      In some areas, this shift has entailed substantial changes in how NLP
      systems are designed, such that deep neural network-based approaches may
      be viewed as a new paradigm distinct from statistical natural language
      processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed7d76" }}>
      In the early days, many language-processing systems were designed by
      symbolic methods, i.e., the hand-coding of a set of rules, coupled with a
      dictionary lookup: such as by writing grammars or devising heuristic rules
      for stemming.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed817b" }}>
      Up to the 1980s, most natural language processing systems were based on
      complex sets of hand-written rules.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed8680" }}>
      transformational grammar), whose theoretical underpinnings discouraged the
      sort of corpus linguistics that underlies the machine-learning approach to
      language processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed8a84" }}>
      Some of the earliest-used machine learning algorithms, such as decision
      trees, produced systems of hard if-then rules similar to existing
      hand-written rules.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed8e89" }}>
      The cache language models upon which many speech recognition systems now
      rely are examples of such statistical models.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed938d" }}>
      The following is a list of some of the most commonly researched tasks in
      natural language processing.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed9792" }}>
      Though natural language processing tasks are closely intertwined, they can
      be subdivided into categories for convenience.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed9b97" }}>
      Increasingly, however, research has focused on statistical models, which
      make soft, probabilistic decisions based on attaching real-valued weights
      to each input feature.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#ed9f9b" }}>
      Natural language processing has its roots in the 1950s.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eea49f" }}>
      Since the early 2010s, the field has thus largely abandoned statistical
      methods and shifted to neural networks for machine learning.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eea8a4" }}>
      Such models are generally more robust when given unfamiliar input,
      especially input that contains errors (as is very common for real-world
      data), and produce more reliable results when integrated into a larger
      system comprising multiple subtasks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eeaca8" }}>
      Since the neural turn, statistical methods in NLP research have been
      largely replaced by neural networks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#eeb0ac" }}>
      The result is a computer capable of ‘understanding’ the contents of
      documents, including the contextual nuances of the language within them.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#efb4b1" }}>
      The intent behind other usages, like in ”She is a big person” will remain
      somewhat ambiguous to a person and a cognitive NLP algorithm alike without
      additional information.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#efb8b5" }}>
      Some of these tasks have direct real-world applications, while others more
      commonly serve as subtasks that are used to aid in solving larger tasks.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f0bcb9" }}>
      When used as a Stative verb, as in ”Tomorrow is a big day”, a likely
      inference of the author’s intent it that ”big” is being used to imply
      ”importance”.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f0c0bd" }}>
      Such models have the advantage that they can express the relative
      certainty of many different possible answers rather than only one,
      producing more reliable results when such a model is included as a
      component of a larger system.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f1c4c1" }}>
      Cognitive linguistics is an interdisciplinary branch of linguistics,
      combining knowledge and research from both psychology and linguistics.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f1c8c5" }}>
      These algorithms take as input a large set of "features" that are
      generated from the input data.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f2cbc9" }}>
      This was due to both the steady increase in computational power (see
      Moore's law) and the gradual lessening of the dominance of Chomskyan
      theories of linguistics (e.g.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f2cfcd" }}>
      A major drawback of statistical methods is that they require elaborate
      feature engineering.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f3d3d1" }}>
      However, they continue to be relevant for contexts in which statistical
      interpretability and transparency is required.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f4d7d5" }}>
      The technology can then accurately extract information and insights
      contained in the documents as well as categorize and organize the
      documents themselves.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f4dad9" }}>
      Cognition refers to "the mental action or process of acquiring knowledge
      and understanding through thought, experience, and the senses."{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f5dedd" }}>
      Cognitive science is the interdisciplinary, scientific study of the mind
      and its processes.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f5dedd" }}>
      These examples are not presented to be complete, but merely as indicators
      of the implication of the idea of Conceptual metaphor.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f5dedd" }}>
      For example, consider some of the meanings, in English, of the word “big”.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f6e1e0" }}>
      A coarse division is given below.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      Already in 1950, Alan Turing published an article titled "Computing
      Machinery and Intelligence" which proposed what is now called the Turing
      test as a criterion of intelligence, a task that involves the automated
      interpretation and generation of natural language, but at the time not
      articulated as a problem separate from artificial intelligence.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      The premise of symbolic NLP is well-summarized by John Searle's Chinese
      room experiment: Given a collection of rules (e.g., a Chinese phrasebook,
      with questions and matching answers), the computer emulates natural
      language understanding (or other NLP tasks) by applying those rules to the
      data it is confronted with.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      For instance, the term neural machine translation (NMT) emphasizes the
      fact that deep learning-based approaches to machine translation directly
      learn sequence-to-sequence transformations, obviating the need for
      intermediate steps such as word alignment and language modeling that was
      used in statistical machine translation (SMT).{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      The machine-learning paradigm calls instead for using statistical
      inference to automatically learn such rules through the analysis of large
      corpora (the plural form of corpus, is a set of documents, possibly with
      human or computer annotations) of typical real-world examples.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      When used as a Comparative, as in “That is a big tree,” a likely inference
      of the intent of the author is that the author is using the word “big” to
      imply a statement about the tree being ”physically large” in comparison to
      other trees or the authors experience.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      In the 2010s, representation learning and deep neural network-style
      machine learning methods became widespread in natural language processing,
      due in part to a flurry of results showing that such techniques can
      achieve state-of-the-art results in many natural language tasks, for
      example in language modeling, parsing, and many others.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      George Lakoff offers a methodology to build Natural language processing
      (NLP) algorithms through the perspective of Cognitive science, along with
      the findings of Cognitive linguistics: The first defining aspect of this
      cognitive task of NLP is the application of the theory of Conceptual
      metaphor, explained by Lakoff as “the understanding of one idea, in terms
      of another” which provides an idea of the intent of the author.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      More recent systems based on machine-learning algorithms have many
      advantages over hand-produced rules: Despite the popularity of machine
      learning in NLP research, symbolic methods are still (2020) commonly used
      Since the so-called "statistical revolution" in the late 1980s and
      mid-1990s, much natural language processing research has relied heavily on
      machine learning.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      Popular techniques include the use of word embeddings to capture semantic
      properties of words, and an increase in end-to-end learning of a
      higher-level task (e.g., question answering) instead of relying on a
      pipeline of separate intermediate tasks (e.g., part-of-speech tagging and
      dependency parsing).{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      However, part-of-speech tagging introduced the use of hidden Markov models
      to natural language processing, and increasingly, research has focused on
      statistical models, which make soft, probabilistic decisions based on
      attaching real-valued weights to the features making up the input data.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      This leads to the second defining aspect of this cognitive task of NLP,
      namely Probabilistic context-free grammar (PCFG) which enables cognitive
      NLP algorithms to assign relative measures of meaning to a word, phrase,
      sentence or piece of text based on the information presented before and
      after the piece of text being analyzed.{" "}
    </span>
  </p>,
  <p>
    <span style={{ backgroundColor: "#f7e5e4" }}>
      The mathematical equation for such algorithms is presented in US patent
      9269353 Where, RMM, is the Relative Measure of Meaning token, is any block
      of text, sentence, phrase or word N, is the number of tokens being
      analyzed PMM, is the Probable Measure of Meaning based on a corpora d, is
      the location of the token along the sequence of N-1 tokens PF, is the
      Probability Function specific to a language{" "}
    </span>
  </p>,
];

export const summary = [
  <p>
    <span>
      Natural language processing (NLP) is a subfield of linguistics, computer
      science, and artificial intelligence concerned with the interactions
      between computers and human language, in particular how to program
      computers to process and analyze large amounts of natural language data.
      Challenges in natural language processing frequently involve speech
      recognition, natural language understanding, and natural-language
      generation. Starting in the late 1980s, however, there was a revolution in
      natural language processing with the introduction of machine learning
      algorithms for language processing. In some areas, this shift has entailed
      substantial changes in how NLP systems are designed, such that deep neural
      network-based approaches may be viewed as a new paradigm distinct from
      statistical natural language processing. Many different classes of
      machine-learning algorithms have been applied to
      natural-language-processing tasks. In the early days, many
      language-processing systems were designed by symbolic methods, i.e., the
      hand-coding of a set of rules, coupled with a dictionary lookup: such as
      by writing grammars or devising heuristic rules for stemming.
    </span>
  </p>,
];
