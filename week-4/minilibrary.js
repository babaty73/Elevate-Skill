/*const book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  isRead: false,

  toggleRead() {
    this.isRead = !this.isRead;
  },

  getSummary() {
    return `${this.title} by ${this.author} - ${this.isRead ? "Read" : "Not Read"}`;
  }
};*/

// Library array
const library = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    isRead: true,
    toggleRead() {
      this.isRead = !this.isRead;
    },
    getSummary() {
      return `${this.title} by ${this.author} - ${this.isRead ? "Read" : "Not Read"}`;
    }
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    isRead: false,
    toggleRead() {
      this.isRead = !this.isRead;
    },
    getSummary() {
      return `${this.title} by ${this.author} - ${this.isRead ? "Read" : "Not Read"}`;
    }
  },
  {
    title: "JavaScript Patterns",
    author: "Stoyan Stefanov",
    isRead: false,
    toggleRead() {
      this.isRead = !this.isRead;
    },
    getSummary() {
      return `${this.title} by ${this.author} - ${this.isRead ? "Read" : "Not Read"}`;
    }
  }
];

// Log summaries
library.forEach(book => console.log(book.getSummary()));