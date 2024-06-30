class JournalView {
  constructor() {
    // Get references to DOM elements
    this.app = this.getElement('#app');
    this.entryList = this.getElement('#entryList');
    this.newEntryInput = this.getElement('#newEntry');
    this.addEntryButton = this.getElement('#addEntry');
    this.dateTimeElement = this.getElement('#dateTime');

    // Render the initial date and time
    this.renderDateTime();
    // Update the date and time every second
    setInterval(this.renderDateTime.bind(this), 1000);
  }

  // Helper method to get a DOM element by its selector
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  // Render the current date and time
  renderDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.dateTimeElement.textContent = dateTimeString;
  }

  // Render the journal entries
  renderEntries(entries) {
    // Clear the existing entry list
    this.entryList.innerHTML = '';

    // Iterate over each entry and create a list item for it
    entries.forEach((entry, index) => {
      const entryItem = document.createElement('li');
      entryItem.innerHTML = `
        <div class="entry-header">
          <span class="entry-date">${entry.date}</span>
          <div class="entry-actions">
            <button class="edit" data-index="${index}"><i class="fas fa-edit"></i></button>
            <button class="delete" data-index="${index}"><i class="fas fa-trash"></i></button>
          </div>
        </div>
        <div class="entry-content">
          <span class="entry-text">${entry.text}</span>
          <span class="entry-word-count">Word Count: ${entry.wordCount}</span>
        </div>
      `;
      // Append the entry item to the entry list
      this.entryList.appendChild(entryItem);
    });
  }
}