* Typescript
* Graphql with nexus

Playing around with different sources and resolvers for the data, clue is in the query name.

```graphql
query HardCodedActivity {
  hardCodedActivity {
    id
    name
    distance
    moving_time
    elapsed_time
    sport_type
    private
    average_watts
    max_watts
  }
}
```

```graphql
query FileBasedActivities {
  fileBasedActivities {
    id
    name
    distance
    moving_time
    elapsed_time
    sport_type
    private
    average_watts
    max_watts
  }
}
```

```graphql
{
  privateActivitiesFromInMemoryDb {
    id
    name
    distance
    moving_time
    elapsed_time
    sport_type
    private
    average_watts
    max_watts
  }
}
```

```graphql
mutation CreateActivity ($name: String!, $distance: Int!, $movingTime: Int!, $elapsedTime: Int!, $private: Boolean!, $sportType: String!) {
  createActivity(name: $name, distance: $distance, moving_time: $movingTime, elapsed_time: $elapsedTime, private: $private, sport_type: $sportType) {
    id
}}

{
"name": "Ride to Bath",
"distance": 30,
"movingTime": 90,
"elapsedTime": 90,
"private": false,
"sportType": "Bike"
}
```