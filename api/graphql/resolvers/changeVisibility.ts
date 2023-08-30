import {FieldResolver} from "nexus";
import * as yup from "yup"
import {changeVisibilityValidation} from "../utils/changeVisibilityValidation";

export const changeVisibility: FieldResolver<
    'Mutation',
    'changeVisibility'
    > = async (source, { visibilityUpdate}, ctx) => {
    try {
        await changeVisibilityValidation.validate(visibilityUpdate)
        let activity = ctx.db.activities.find(a => a.id === visibilityUpdate.id)
        if(!activity){
            throw new Error("Could not find activity with id " + visibilityUpdate.id)
        }
        activity.private = visibilityUpdate.visible

        return {
            message: 'Visibility updated',
            error: false
        }
    }
    catch (err) {
        const message = (err as yup.ValidationError).message || 'Invalid input'
        return {
            message,
            error: true
        }
    }
};