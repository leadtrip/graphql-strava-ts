import { objectType } from 'nexus'
import {ObjectDefinitionBlock} from "nexus/dist-esm/definitions/objectType";

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
        t.nonNull.int('average_watts')
        t.nonNull.int('max_watts')
    }
})