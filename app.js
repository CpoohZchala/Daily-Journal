// Instantiate the JournalModel, which will handle the data logic
const model = new JournalModel();

// Instantiate the JournalView, which will handle the user interface
const view = new JournalView();

// Instantiate the JournalController, which will mediate between the model and the view
const controller = new JournalController(model, view);
