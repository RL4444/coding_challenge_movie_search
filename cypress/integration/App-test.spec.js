import React from 'react';

describe('complete e to e test', () => {
    it('should render the page with components and attributes', () => {
        cy.visit('/');

        //test rendered elements
        cy.get('[data-cy="app-cy"]').should('be.visible');
        cy.get('[data-cy="searchbar-cy"]').should('be.visible');
        cy.get('[data-cy="title-cy"]').should('be.visible');

        // test classes
        cy.get('[data-cy="app-cy"]').should('not.have.class', 'top');

        // test attrs
        cy.get('[data-cy="searchbar-cy"] > input').should('have.attr', 'placeholder');
        cy.get('[data-cy="searchbar-cy"] > input').should('not.have.focus');

        // test searchbar sub els
        cy.get('[data-cy="searchbar-cy"] > p').should('be.visible').should('have.text', '');
    });

    it('should show the Spinner when test is entered into searchbar input', () => {
        cy.get('[data-cy="searchbar-cy"] > input').type('The');
        cy.get('[data-cy="app-cy"').should('have.class', 'top');
        cy.get('[data-cy="spinner-cy"]').should('be.visible');
    });

    it('should remove the input value when the clear button is clicked ', () => {
        cy.get('[data-cy="searchbar-cy"] > p').click();
        cy.get('[data-cy="searchbar-cy"] > input').should('have.value', '');
        cy.get('[data-cy="app-cy"').should('not.have.class', 'top');
    });

    it('should search for term that yields no results', () => {
        cy.get('[data-cy="searchbar-cy"] > input').type('Th');
        cy.get('[data-cy="spinner-cy"]');

        cy.wait(4000);

        cy.get('[data-cy="movie-list-cy"] > p').should('be.visible');
    });

    it('should search for term yields results', () => {
        cy.get('[data-cy="searchbar-cy"] > p').click();
        cy.get('[data-cy="searchbar-cy"] > input').type('The Lord Of The Rings');
        cy.get('[data-cy="spinner-cy"]');

        cy.wait(4000);

        cy.get('[data-cy="movie-list-cy"] > a').each(($movie) => {
            cy.wrap($movie).should('have.attr', 'href');
            cy.wrap($movie).get('img').should('be.visible');
            cy.wrap($movie).get('p').should('be.visible');
        });
    });
});
