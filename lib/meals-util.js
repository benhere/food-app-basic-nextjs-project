
const sqlite3 = require('sqlite3').verbose();

// Create a database instance
const db = new sqlite3.Database('meals.db');

export async function getMeals(){
    return new Promise((resolve, reject) => {
        // Simulate a delay to mimic an asynchronous operation
        setTimeout(() => {
            // Query to select all meals from the database
            db.all('SELECT * FROM meals', (err, rows) => {
                if (err) {
                    // Reject the promise with the error
                    reject(err);
                } else {
                    // Resolve the promise with the result
                    resolve(rows);
                }
            });
        }, 2000);
        // throw new Error('Loading meals failed')
    });
}
