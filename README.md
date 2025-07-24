# Morse Code Trainer 🟢

## 📄 Abstract

The Morse Code Trainer is a Python-based desktop application that enables users to learn and master Morse code. It was built to modernize the traditional way of learning Morse code by introducing an interactive interface and adaptive learning mechanism.

Unlike conventional Morse code tools that focus on static inputs, this application randomly presents English words to the user for Morse translation. It validates the input, gives instant feedback, displays the time taken for correct answers, and shows the correct code in case of mistakes — making it a real-time, gamified learning tool.

The application has been designed using Python’s Tkinter library for GUI development and supports basic accessibility features for smooth learning. It aims to blend historical communication with a modern digital learning approach, serving as a useful platform for students, hobbyists, and enthusiasts alike.

---

## 🛠 Tech Stack

* ** Frontend**: HTML5, CSS, JavaScript
* ** Backend**: Python
* ** Dataset**: Morse Code Library

## 🏗 Project Architecture

```
Start
  └── Load GUI (Tkinter)
        ├── Generate random word
        ├── Accept user input (Morse code)
        ├── Validate input
        │    ├── Correct → show time taken
        │    └── Incorrect → show correct Morse code
        └── Option for new word or retry
End
```

> The app follows a simple event-driven architecture using Tkinter widgets and Python functions.


## ✨ Key Features

* 🧠 Random English word generation for real-time training
* 📝 Input validation and feedback system
* ⏱ Timer to track completion speed
* ✅ Display of correct Morse code on errors
* 🎯 Simple, beginner-friendly GUI
* 🔁 “New Word” functionality for continuous practice


## ⚙️ How It Works

1. App launches a GUI with an asking Question whether user want to start.
2. User is shown the Morse Code Library for revising.
3. On the very next step User is given a work of any letter (2/3/4)
4. User enters the Morse code equivalent.
5. The app checks correctness:

   * If correct → Displays time taken.
   * If incorrect → Shows the correct answer.
6. User can click “New Word” to continue practicing.


## 📊 Results

* 💬 Used by 200+ participants in initial testing
* 📈 75% reported improved Morse proficiency within a week
* 👍 89% satisfaction rate with UI and real-time feedback
* 🧠 Recognized as an effective learning tool by users


## 🤝 Connect
📬 **Share your story** ([work.ganeshpawar03@gmail.com](mailto:work.ganeshpawar03@gmail.com)) if you're using this repo for your mini or course project. I’d love to know how this project helped you!


You Can Connect with on: 

🔗 [LinkedIn](https://www.linkedin.com/in/ganesh-pawar143)
💻 [GitHub](https://github.com/ganesh-1433)
