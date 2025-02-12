describe("Multiplicador", () => {
    it("Shows the amount of the addition to the user", () => {
      cy.visit("/");
      cy.get("#primer-numero-m").type(4);
      cy.get("#segundo-numero-m").type(5);
      cy.get("#multiplicar-button").click();
      cy.get("#resultado-div-m").should("contain", "9");
    });
  });