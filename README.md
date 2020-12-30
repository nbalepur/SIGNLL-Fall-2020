# Special Interest Group for Natural Language Learning (SIGNLL) Projects

**To learn more about SIGNLL and see the projects for yourself, visit our website [here](https://nbalepur.github.io/SIGNLL-Fall-2020/)**

SIGNLL is an organization committed to the learning and exploration of various Natural Language Processing and Machine Learning Topics. As one of the many subcommittees of the UIUC chapter of [ACM](acm.illinois.edu), we taught various lessons and walked through different Python projects to give a taste of this subfield of computer science. This repository contains the code and different materials for the Fall 2020 semester of SIGNLL

### Table of Contents  
- [Getting Started](#getting-started)  
- [Projects](#projects)
  - [Intro to Python and NumPy](#intro)
  - [Linear and Logistic Regression](#regression)
  - [Twitter Sentiment Analysis](#sentiment)
  - [Neural Networks](#ml)
  - [Chatbot Part 1](#chatbotp1)
  - [Chatbot Part 2](#chatbotp2)
  - [Text Summarization](#summary)
  - [Tries](#tries)
  - [Naive Bayes](#bayes)
- [Website Info](#website-info)
- [Authors / Contact](#authors-contact)

<br />
<br />

<a name = "getting-started"></a>
## Getting Started

To get the different projecs running on your machine, follow the steps below

### Installing and Opening Notebooks

First, run the following command to get the files on your machine

```
git clone https://github.com/nbalepur/SIGNLL-Fall-2020.git
```

The recommended IDE for these projects is `Jupyter Notebook`. My preferred installation method of `Jupyter Notebook` is with `Anaconda`

Instructions on how to install `Anaconda` can be found [here](https://docs.anaconda.com/anaconda/install/)

Once `Anaconda` is installed, simply open up the application and type `"jupyter notebook"` into the terminal. From there, you should be able to navigate to your desired project file

### Additional Installations

Some projects require additional libraries to be installed, such as `Keras` and `Tensorflow` in the `Neural Networks` project

This can be accomplished fairly simply using `Anaconda Navigator`, instructions of which can be found [here](https://www.freecodecamp.org/news/install-tensorflow-and-keras-using-anaconda-navigator-without-command-line/)

### Running Jupyter Notebooks

An in-depth tutorial on how to run and navigate through `Jupyter Notebooks` can be found [here](https://www.dataquest.io/blog/jupyter-notebook-tutorial/)

<br />
<br />

<a name = "projects"></a>

## Projects

Below you can find the different projects for SIGNLL:

- [Intro to Python and NumPy](#intro)
- [Linear and Logistic Regression](#regression)
- [Twitter Sentiment Analysis](#sentiment)
- [Neural Networks](#ml)
- [Chatbot Part 1](#chatbotp1)
- [Chatbot Part 2](#chatbotp2)
- [Text Summarization](#summary)
- [Tries](#tries)
- [Naive Bayes](#bayes)

<a name = "intro"></a>

### Intro to Python and NumPy

This week, we go through a brief description of NLP and the other projects we covered throughout the semester. We then showcase a notebook demo with a beginner's application to `Python` and `NumPy` We have also provided a notebook for extra practice with various `NumPy` functions and `Python` data structures. Finally, we give a brief demo of using what we've learned in a simple spam-detection model

- [Notebook Demo](./Intro%20Meeting/Meeting%201%20Slides.ipynb)
- [Slides](./Intro%20Meeting/Intro%20Meeting%20Slides.pdf)
- [Notebook Practice (Blank)](./Intro%20Meeting/Meeting%201%20Workbook%20Blank.ipynb)
- [Notebook Practice (Filled)](./Intro%20Meeting/Meeting%201%20Workbook%20Solutions.ipynb)

#### Spam / Not Spam Demo

In this introductory demo, we take a look at how we can use the basics of `Python` to predict whether or not an email is spam or not spam

*In the following screenshot, `spam` designates a spam email and `ham` is a non-spam email*

![spam demo](./images/spam-not-spam.PNG)

<br />

<a name = "regression"></a>

### Linear and Logistic Regression

This week, we discuss two of the most fundamental algorithms for NLP: linear and logistic regression. We give an overview of the theory behind the regression, an explanation of data collection and model validation, and a preview of how these algorithms can be applied using tweet predictions

- [Slides](./Linear%20and%20Logistic%20Regression/Linear%20and%20Logistic%20Regression%20Slides.pdf)
- [Notebook (Blank)](./Linear%20and%20Logistic%20Regression/Linear%20and%20Logistic%20Regression%20Blank.ipynb)
- [Notebook (Filled)](./Linear%20and%20Logistic%20Regression/Linear%20and%20Logistic%20Regression%20Filled.ipynb)

#### Linear Regression Demo

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Linear and Logistic Regression` and `Linear Regression Demo`, you can try the following demo for yourself!

You will be taken to an interactive plot where you can add points by clicking on the plot, and delete an existing point by clicking on it. Once you are satisfied, you can press `Fit Line` to run the algorithm. Finally, you can vary the degree of the model fit and the equation for the line will update dynamically. Pressing `Clear` will remove all points, lines, and equations on the screen

![linreg demo](./images/linreg.gif)

<br />

<a name = "sentiment"></a>
### Twitter Sentiment Analysis

This week, we take what we learned last week and apply logistic regression to predicting the sentiment of tweets. We'll discuss our general algorithm for sentiment analysis and apply this algorithm in the notebook to determine whether a tweet is positive or negative

- [Slides](./Twitter%20Sentiment%20Analysis/Sentiment%20Analysis%20Slides.pdf)
- [Notebook (Blank)](./Twitter%20Sentiment%20Analysis/Twitter%20Sentiment%20Analysis%20Blank.ipynb)
- [Notebook (Filled)](./Twitter%20Sentiment%20Analysis/Twitter%20Sentiment%20Analysis%20Filled.ipynb)

#### Custom Tweet Demo

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Sentiment Analysis` and `Custom Tweet Demo`, you can try the following demo for yourself!

In this demo, you can type in your own custom tweet and watch the computer predict whether or not your tweet was positive or negative. You'll be able to view your custom tweet, followed by visualizations of its overall sentiment probability and individual word breakdown

![sentiment demo](./images/sentiment.gif)

<br />

<a name = "ml"></a>
### Neural Networks

This week, we go over another funademental concept for NLP: neural networks. We begin by taking a look at the mathematical and statistical theory behind neural networks and the principles of training and testing. Afterwards, we create a neural network from scratch using `NumPy` and use it to predict truth tables and handwritten digits with the [MNIST](https://en.wikipedia.org/wiki/MNIST_database) dataset

**Note: To run this project in Python, you must have `Keras` installed. Instructions on how to do this can be found above**

- [Slides](./Neural%20Networks/Neural%20Network%20Slides.pdf)
- [Notebook (Blank)](./Neural%20Networks/Neural%20Networks%20Blank.ipynb)
- [Notebook (Filled)](./Neural%20Networks/Neural%20Networks%20Filled.ipynb)

#### Handwritten Digits Demo

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Neural Networks` and `Handwritten Digits Demo`, you can try the following demo for yourself!

Simply draw your number on the canvas and press `Predict` to view the probability distribution of the model. You can also press `Clear` to clear your drawing and predict again

![mnist demo](./images/mnist.gif)

<br />

<a name = "chatbotp1"></a>
### Chatbot Part 1

We begin our exploration of chatbots this week by learning what chatbots are used for, the intuition behind how they work, and a simple bag-of-words algorithm we can use to accomplish our task. Afterwards, we use our knowledge of neural networks to train a customer support chatbot to predict a certain tag depending on the user input

**Note: There are two versions of this notebook: one that uses `NumPy` and one that uses `Keras`, but they function in the exact same way**

- [Slides](./Customer%20Support%20Chatbot/Part%201/Chatbot%20Part%201%20Slides.pdf)
- [NumPy Notebook (Blank)](./Customer%20Support%20Chatbot/Part%201/%5Bnumpy%5D%5BPart%201%5D%20Customer%20Support%20Chatbot%20Blank.ipynb)
- [NumPy Notebook (Filled)](./Customer%20Support%20Chatbot/Part%201/%5Bnumpy%5D%5BPart%201%5D%20Customer%20Support%20Chatbot%20Filled.ipynb)
- [Keras Notebook (Blank)](./Customer%20Support%20Chatbot/Part%201/%5BKeras%5D%5BPart%201%5D%20Customer%20Support%20Chatbot%20Blank.ipynb)
- [Keras Notebook (Filled)](./Customer%20Support%20Chatbot/Part%201/%5BKeras%5D%5BPart%201%5D%20Customer%20Support%20Chatbot%20Filled.ipynb)

#### Tag Prediction Demo

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Chatbot Part 1` and `Tag Prediction Demo`, you can try the following demo for yourself!

Type a custom message and you will be able to see the chatbot's association with your message to one of the following tags:

- `contact`
- `deals`
- `directions`
- `fact`
- `goodbye`
- `greeting`
- `options`
- `recommendation`
- `thanks`

![tag identification demo](./images/chatbotp1.gif)

<br />

<a name = "chatbotp2"></a>
### Chatbot Part 2

This week, we review our chatbot algorithm, learn how we can make multi-class predictions, and analyze the output layer of an activated neural network. We'll then use what we learned this week and last week to use our pre-trained chatbot to make predictions and converse with a user

**Note: There are two versions of this notebook: one that uses `NumPy` and one that uses `Keras`, but they function in the exact same way**

- [Slides](./Customer%20Support%20Chatbot/Part%202/Chatbot%20Part%202%20Slides.pdf)
- [NumPy Notebook (Blank)](./Customer%20Support%20Chatbot/Part%202/%5Bnumpy%5D%5BPart%202%5D%20Customer%20Support%20Chatbot%20Blank.ipynb)
- [NumPy Notebook (Filled)](./Customer%20Support%20Chatbot/Part%202/%5Bnumpy%5D%5BPart%202%5D%20Customer%20Support%20Chatbot%20Filled.ipynb)
- [Keras Notebook (Blank)](./Customer%20Support%20Chatbot/Part%202/%5BKeras%5D%5BPart%202%5D%20Customer%20Support%20Chatbot%20Blank.ipynb)
- [Keras Notebook (Filled)](./Customer%20Support%20Chatbot/Part%202/%5BKeras%5D%5BPart%202%5D%20Customer%20Support%20Chatbot%20Filled.ipynb)

#### Chatbot Demo

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Chatbot Part 2` and `Chatbot Demo`, you can try the following demo for yourself!

In this demo, you'll be able to interact with the chatbot that we built. This chatbot was created to be a customer support chatbot for Taco Bell. Type the message in the input field and press `Send` to have your customer support needs fulfilled!

![chatbot demo](./images/chatbotp2.gif)

<br />

<a name = "summary"></a>

### Text Summarization

This week, we take a look at different types of summarization, a simple algorithm for summarizing text, and how to solve certain problems that arise from our algorithm. We then apply these concepts by taking an arbitrary Wikipedia page and picking the most representative sentences to form a coherent summary

- [Slides](./Text%20Summarization/Text%20Summarization%20Slides.pdf)
- [Notebook (Blank)](./Text%20Summarization/Text%20Summarization%20Blank.ipynb)
- [Notebook (Filled)](./Text%20Summarization/Text%20Summarization%20Filled.ipynb)

#### Summary Visualization - Animation

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Text Summarization` and `Summary Visualization`, you can press `Play Animation` to try the following demo for yourself!

After pressing the `Play Animation` button, you'll be able to visualize how the algorithm works

![summary animation](./images/summary-animation.gif)

#### Summary Visualization - Comparison

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Text Summarization` and `Summary Visualization`, you can press `Compare Summary` to try the following demo for yourself!

After pressing `Compare Summary` you can see a side-by-side comparison of the weights of the original text and the summary. You can toggle the switch at the top of the screen to switch between word weights and summary weights

![summary comparison](./images/summary-compare.gif)

<br />

<a name = "tries"></a>

### Tries

This week, we take a look at the Trie data structure. We discuss the theory behind Tries, its benefits and drawbacks, and applications where the data structure would be useful. To prove our theories, we then analyze the efficiency of different data structures for storing a large amount of text, as well as some useful applications of the Trie data structure

- [Slides](./Tries/Tries%20Slides.pdf)
- [Notebook (Blank)](./Tries/Tries%20Blank.ipynb)
- [Notebook (Filled)](./Tries/Tries%20Filled.ipynb)

#### Word Unscrambler Demo

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Tries` and `Word Unscrambler`, you can try the following demo for yourself!

In this demo you can take a look at a very useful application of Tries: recursively unscrambling letters to create valid words. Type some letters in the input field to see the speed at which Tries allow us to do this. After all the words are generated, you can use the slider to subset by word length

![unscrambler demo](images/unscramble.gif)

<br />

<a name = "bayes"></a>

### Naive Bayes

This week, we give an introduction to probability, statistics and bayes theorem, and then apply what we learned to the de-anonymization of tweets. By combining statistics and NLP, we are able to create a light-weight model to predict whether a tweet was written by Kanye West or Joe Biden


- [Slides](./Naive%20Bayes%20Classification/Naive%20Bayes%20Slides.pdf)
- [Notebook (Blank)](./Naive%20Bayes%20Classification/Naive%20Bayes%20Classifier%20Blank.ipynb)
- [Notebook (Filled)](./Naive%20Bayes%20Classification/Naive%20Bayes%20Classifier%20Filled.ipynb)

#### Tweet Author Demo

If you navigate to the [SIGNLL Website](nbalepur.github.io/SIGNLL-Fall-2020) under `Naive Bayes` and `Tweet Author Demo`, you can try the following demo for yourself!

Simply type your message in the input field and see if the computer predicts the tweet was more likely to be tweeted by Kanye West or Joe Biden. You'll be able to see a fake tweet for the predicted author, as well as visualizations for the author probability distribution and individual word author breakdown

![tweet author demo](images/tweet-author.gif)

<br />
<br />

<a name = "website-info"></a>

## Website Info

This website was created using [React](https://github.com/facebook/create-react-app) and relies heavily on the [Bootstrap](https://react-bootstrap.github.io/) component library

To run the website locally, navigate to `SIGNLL-Fall-2020/website` and run the following command:

```
npm start
```

This will deploy the website locally in your browser

<br />
<br />

<a name = "authors-contact"></a>

## Authors / Contact

All of the code for this resository was written by me, Nishant Balepur. If you have any questions or concerns, feel free to reach out!
- [GitHub](https://www.github.com/nbalepur)
- [LinkedIn](https://www.linkedin.com/in/nishant-balepur-a03818107/)
- [Email](mailto:balepur2@illinois.edu)
