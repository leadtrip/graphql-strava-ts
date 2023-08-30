import {objectType, extendType, nonNull, stringArg, intArg, booleanArg, nullable, inputObjectType} from 'nexus'
import fileActivities from "./fileActivities";
import activities from "./fileActivities";
import {changeVisibility} from "./resolvers/changeVisibility";

export const Activity = objectType({
    name: "Activity",
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('name')
        t.float('distance')
        t.nonNull.int('moving_time')
        t.nonNull.int('elapsed_time')
        t.nonNull.string('sport_type')
        t.nonNull.boolean('private')
        t.int('average_watts')
        t.int('max_watts')
    }
})

export const HardCodedActivityQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('hardCodedActivity', {
            type: 'Activity',
            resolve() {
                return [{id: 1, name: 'Activity 1', distance: 32.0, moving_time: 60, elapsed_time: 64, sport_type: 'IndoorBike', private: false, average_watts: 220, max_watts: 500}]
            }
        })
    }
})

export const FileBasedActivityQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('fileBasedActivities', {
            type: 'Activity',
            resolve() {
                return fileActivities
            }
        })
    }
})

export const InMemoryDbActivityQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('inMemoryDbActivities', {
            type: 'Activity',
            resolve(_root, _args, ctx) {
                return ctx.db.activities;
            }
        })
    }
})

export const CreateActivity = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createActivity', {
            type: "Activity",
            args: {
                name: nonNull(stringArg()),
                distance: nonNull(intArg()),
                moving_time: nonNull(intArg()),
                elapsed_time: nonNull(intArg()),
                average_watts: nullable(intArg()),
                max_watts: nullable(intArg()),
                private: nonNull(booleanArg()),
                sport_type: nonNull(stringArg())
            },
            resolve(_root, args, ctx) {
                const activity = {
                    id: ctx.db.activities.length + 1,
                    name: args.name,
                    distance: args.distance,
                    moving_time: args.moving_time,
                    elapsed_time: args.elapsed_time,
                    average_watts: args.average_watts,
                    max_watts: args.max_watts,
                    private: args.private,
                    sport_type: args.sport_type
                }

                ctx.db.activities.push(activity)
                return activity
            }
        })
    }
})

export const ChangeVisibility = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('changeVisibility', {
            type: UpdateResponse,
            args: { visibilityUpdate: nonNull(VisibilityUpdate) },
            resolve: changeVisibility
        })
    }
})

const VisibilityUpdate = inputObjectType({
    name: 'visibilityArgs',
    definition: t => {
        t.nonNull.int('id');
        t.nonNull.boolean('visible');
    }
})

const UpdateResponse = objectType({
    name: 'updateVisibilityResponse',
    definition: t => {
        t.nonNull.string('message');
        t.nonNull.boolean('error');
    }
})