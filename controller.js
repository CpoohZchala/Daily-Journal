class JournalController {
  constructor(model, view) {
      this.model = model;
      this.view = view;

      // Initially render entries using the data from the model
      this.view.renderEntries(this.model.entries);

      // Add event listeners for user interactions
      this.addEventListeners();
  }

  // Method to add a new entry
  addEntry(entryText) {
      this.model.addEntry(entryText);
      this.view.renderEntries(this.model.entries);
  }

  // Method to edit an existing entry
  editEntry(index) {
      const entry = this.model.entries[index];
      const updatedText = prompt('Edit entry:', entry.text);
      if (updatedText !== null) {
          this.model.editEntry(index, updatedText);
          this.view.renderEntries(this.model.entries);
      }
  }

  // Method to delete an entry
  deleteEntry(index) {
      if (confirm('Are you sure you want to delete this entry?')) {
          this.model.deleteEntry(index);
          this.view.renderEntries(this.model.entries);
      }
  }

  // Add event listeners for button clicks and list item interactions
  addEventListeners() {
      // Listener for adding a new entry
      this.view.addEntryButton.addEventListener('click', () => {
          const entryText = this.view.newEntryInput.value.trim();
          if (entryText) {
              this.addEntry(entryText);
              this.view.newEntryInput.value = '';
          }
      });

      // Listener for editing and deleting entries
      this.view.entryList.addEventListener('click', (event) => {
          if (event.target.classList.contains('edit') || event.target.parentElement.classList.contains('edit')) {
              const index = event.target.closest('.edit').dataset.index;
              this.editEntry(Number(index));
          } else if (event.target.classList.contains('delete') || event.target.parentElement.classList.contains('delete')) {
              const index = event.target.closest('.delete').dataset.index;
              this.deleteEntry(Number(index));
          }
      });
  }
}
