describe("Food Preferences Survey Form", function() {
  // Check if the title is correctly set
  it("should have the correct title", function() {
    const title = document.querySelector("h1");
    expect(title).not.toBeNull();
    expect(title.textContent).toBe("Food Preferences - Survey Form");
  });

  // Check for name input field
  it("should have a text input for Name", function() {
    const nameInput = document.querySelector('input[name="user"]');
    expect(nameInput).not.toBeNull();
    expect(nameInput.type).toBe("text");
  });

  // Check for age input field with min and max
  it("should have a number input for Age with min 13 and max 100", function() {
    const ageInput = document.querySelector('input[name="age"]');
    expect(ageInput).not.toBeNull();
    expect(ageInput.type).toBe("number");
    expect(ageInput.min).toBe("13");
    expect(ageInput.max).toBe("100");
  });

  // Check for location radio buttons
  it("should have radio buttons for location with correct options", function() {
    const locationOptions = document.querySelectorAll('input[name="location"]');
    expect(locationOptions.length).toBeGreaterThan(0);

    const optionsText = Array.from(locationOptions).map(option => option.nextSibling.textContent.trim());
    expect(optionsText).toContain("At Home");
    expect(optionsText).toContain("At Work/School");
    expect(optionsText).toContain("At Restaurants");
  });

  // Check for vegan choice radio buttons
  it("should have radio buttons for vegan choice with Sure and No options", function() {
    const veganOptions = document.querySelectorAll('input[name="vegan"]');
    expect(veganOptions.length).toBe(2);

    const optionsText = Array.from(veganOptions).map(option => option.nextSibling.textContent.trim());
    expect(optionsText).toContain("Sure");
    expect(optionsText).toContain("No");
  });

  // Check for submit button
  it("should have a submit button", function() {
    const submitButton = document.querySelector('button[type="submit"]');
    expect(submitButton).not.toBeNull();
    expect(submitButton.type).toBe("submit");
  });
});
