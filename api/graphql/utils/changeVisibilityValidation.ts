import * as Yup from 'yup'

export const changeVisibilityValidation = Yup.object({
    id: Yup.number().required('id is required'),
    visible: Yup.boolean().required('visible is required')
})