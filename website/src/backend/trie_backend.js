import { words } from "./storage/trie_storage.js";

class TrieNode {
  constructor() {
    this.is_leaf = false;
    this.children = [];
    for (let child = 0; child < 26; child++) {
      this.children.push(null);
    }
  }
}

export const buildTrie = () => {
  let root = new TrieNode();

  for (let word_index = 0; word_index < words.length; word_index++) {
    let word = words[word_index];
    insertWord(root, word);
  }

  return root;
};

export const insertWord = (root, word) => {
  let node = root;

  for (let letter_index = 0; letter_index < word.length; letter_index++) {
    let letter = word[letter_index];
    let index = letter.charCodeAt(0) - "A".charCodeAt(0);

    if (node.children[index] === null) {
      node.children[index] = new TrieNode();
    }

    node = node.children[index];
  }

  node.is_leaf = true;
};

export const unscrambleWord = (root, word) => {
  let possible_words = [];
  unscramble(root, createWordVector(word), possible_words, "");
  let sorted_words = mergesort(possible_words);
  return createWordObj(sorted_words);
};

export const unscramble = (node, scramble, possible_words, word) => {
  if (node.is_leaf) {
    possible_words.push(word);
  }

  if (sum(scramble) === 0) {
    return;
  }

  for (let check_index = 0; check_index < 26; check_index++) {
    if (scramble[check_index] > 0 && node.children[check_index] !== null) {
      word += String.fromCharCode(check_index + "A".charCodeAt(0));
      scramble[check_index]--;

      unscramble(node.children[check_index], scramble, possible_words, word);

      scramble[check_index]++;
      word = word.substr(0, word.length - 1);
    }
  }
};

export const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

export const createWordVector = (word) => {
  word = word.toUpperCase();

  let letters = [];
  for (let letter = 0; letter < 26; letter++) {
    letters.push(0);
  }

  for (let letter_index = 0; letter_index < 26; letter_index++) {
    let letter = word.charCodeAt(letter_index);
    letters[letter - "A".charCodeAt(0)]++;
  }

  return letters;
};

export const mergesort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid_index = (0 + arr.length) / 2;

  let arr1 = mergesort(arr.slice(0, mid_index));
  let arr2 = mergesort(arr.slice(mid_index, arr.length));

  return merge(arr1, arr2);
};

export const merge = (arr1, arr2) => {
  let arr1_ptr = 0;
  let arr2_ptr = 0;

  let new_arr = [];

  while (arr1_ptr !== arr1.length || arr2_ptr !== arr2.length) {
    if (arr1_ptr === arr1.length) {
      new_arr.push(arr2[arr2_ptr]);
      arr2_ptr++;
      continue;
    }

    if (arr2_ptr === arr2.length) {
      new_arr.push(arr1[arr1_ptr]);
      arr1_ptr++;
      continue;
    }

    let word1 = arr1[arr1_ptr];
    let word2 = arr2[arr2_ptr];

    if (word1.length > word2.length) {
      new_arr.push(word1);
      arr1_ptr++;
      continue;
    }
    if (word2.length > word1.length) {
      new_arr.push(word2);
      arr2_ptr++;
      continue;
    }
    if (word1 < word2) {
      new_arr.push(word1);
      arr1_ptr++;
    } else {
      new_arr.push(word2);
      arr2_ptr++;
    }
  }

  return new_arr;
};

export const createWordObj = (words) => {
  let wordObj = {};

  if (words.length === 0) {
    return null;
  }

  for (let word_index = 0; word_index < words.length; word_index++) {
    let word = words[word_index];
    let word_arr =
      wordObj[word.length] === undefined ? [] : wordObj[word.length];
    word_arr.push(word);
    wordObj[word.length] = word_arr;
  }

  wordObj.maxLength = words[0].length;
  wordObj.minLength = words[words.length - 1].length;

  return wordObj;
};
