# Project REST-Rant

TBD - SUMMARY

## Tech Usage

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Palces index page |
| POST|`/places` | Create a new place |
| Get |/places/new | Form page for creating a new place
| GET | `/places/:id` | Details about particular place |
| GET | `/places/:id/edit` | Form page for editing an exitsting place |
| PUT | `/places/:id` | Form page for editing an existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Create a Rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**rants**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |

## Planning

### User Stories

TBD

### Wireframes

TBD

## Notes
