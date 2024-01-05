# TODO

## MVP

- [x] Setup an express server
- [x] Add typescript
- [x] Create DB abstraction
- [x] Model users and addresses
- [x] Add GET /constituents endpoint to retrieve all. Consider pagination
- [x] Add POST /constituents - creates a new constituent takes their info as a JSON payload.
- [x] Figure out dedupe strategy. Gut says to reject call and tell them they're already in the system. If we don't want that UX then just merge. Which name/address info do we keep? Is this a security vulnerability to just replace info with new stuff? - Don't modify record if it exists
- [x] Add /constituents/export - exports DB as a csv. Start with filter built in but move to query params.

## Extra Credit

- [ ] CSV Bulk Import /constituents/import - probably want auth on this.

## Further Refinements

### DB Modeling

- [ ] Improve Address field. Add second street address, support territories, foreign addresses, zip+4 codes, greeting, etc.

### Data Integrity

- [ ] Consider being "smart" about emails. Google allows "me+anything@gmail.com". Consider stripping that on known email providers.
- [ ] Use Zod or some data validation to sanitize inputs.

## Improved User Experience

- [ ] Add pagination to /constituents endpoint. There could be a lot here
- [ ] Add filter/sort query params to /constituents endpoint. Get those from a certain districts for example.
- [ ] Send welcome/confirmation email?

## Analytics

- [ ] Add (error) logging middleware
- [ ] Add metrics for admins, representatives
- [ ] Publish an event for webhook consumption
