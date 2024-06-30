class JournalModel {
  constructor() {
    // Initialize an empty array to store journal entries
    this.entries = [];
  }

  addEntry(entryText) {
    // Count the number of words in the entry text
    const wordCount = entryText.trim().split(/\s+/).length;
    
    // Check if the word count is within the limit (250 words)
    if (wordCount <= 250) {
      // Get the current date and time
      const now = new Date();
      
      // Format the date string (e.g., "Fri Jun 16")
      const dateString = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      
      // Format the time string (e.g., "09:30")
      const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      
      // Add the new entry to the entries array with the formatted date, time, and word count
      this.entries.push({ text: entryText, date: `${dateString} ${timeString}`, wordCount });
    }
  }

  editEntry(index, updatedText) {
    // Check if the index is within the valid range of entries
    if (index >= 0 && index < this.entries.length) {
      // Update the text of the entry at the specified index
      this.entries[index].text = updatedText;
      
      // Update the word count of the edited entry
      this.entries[index].wordCount = updatedText.trim().split(/\s+/).length;
    }
  }

  deleteEntry(index) {
    // Check if the index is within the valid range of entries
    if (index >= 0 && index < this.entries.length) {
      // Remove the entry at the specified index from the entries array
      this.entries.splice(index, 1);
    }
  }
}