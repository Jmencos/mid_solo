/**
 * Updates the most recent history. This should only be invoked when navigating to a new page.
 * @param path URL path
 */

import { v4 as uuid } from "uuid";

// type HistorySubscriber = {
//   id: string;
//   callback: (currentPath: string) => void;
// };

// type BrowserHistory = {
//   path: string;
// };

export class History {
  // private subscribers: HistorySubscriber[];
  // private path: string;
  // private previousPath: string;
  constructor() {
    this.path = "";
    this.subscribers = [];
    this.previousPath = "";
  }

  get currentPath() {
    return this.path;
  }

  get prevPath() {
    return this.previousPath;
  }

  set currentPath(path) {
    this.updateHistory(path);
  }

  subscribe(cb) {
    const id = uuid().toString();
    this.subscribers.push({ id, callback: cb });
    return id;
  }

  unsubscribe(id) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber.id !== id
    );
  }

  updateHistory(path) {
    this.previousPath = this.path;
    this.path = path === "" ? "/" : path;
    window.history.pushState({}, "", path);
    if (!this.subscribers) return new Error("No callbacks");
    this.subscribers.forEach((subscriber) => subscriber.callback(path));
  }
}

const a = new History();
