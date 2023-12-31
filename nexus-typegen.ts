/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  visibilityArgs: { // input type
    id: number; // Int!
    visible: boolean; // Boolean!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Activity: { // root type
    average_watts?: number | null; // Int
    distance?: number | null; // Float
    elapsed_time: number; // Int!
    id: number; // Int!
    max_watts?: number | null; // Int
    moving_time: number; // Int!
    name: string; // String!
    private: boolean; // Boolean!
    sport_type: string; // String!
  }
  Mutation: {};
  Query: {};
  updateVisibilityResponse: { // root type
    error: boolean; // Boolean!
    message: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Activity: { // field return type
    average_watts: number | null; // Int
    distance: number | null; // Float
    elapsed_time: number; // Int!
    id: number; // Int!
    max_watts: number | null; // Int
    moving_time: number; // Int!
    name: string; // String!
    private: boolean; // Boolean!
    sport_type: string; // String!
  }
  Mutation: { // field return type
    changeVisibility: NexusGenRootTypes['updateVisibilityResponse'] | null; // updateVisibilityResponse
    createActivity: NexusGenRootTypes['Activity']; // Activity!
  }
  Query: { // field return type
    fileBasedActivities: Array<NexusGenRootTypes['Activity'] | null>; // [Activity]!
    hardCodedActivity: Array<NexusGenRootTypes['Activity'] | null>; // [Activity]!
    inMemoryDbActivities: Array<NexusGenRootTypes['Activity'] | null>; // [Activity]!
  }
  updateVisibilityResponse: { // field return type
    error: boolean; // Boolean!
    message: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Activity: { // field return type name
    average_watts: 'Int'
    distance: 'Float'
    elapsed_time: 'Int'
    id: 'Int'
    max_watts: 'Int'
    moving_time: 'Int'
    name: 'String'
    private: 'Boolean'
    sport_type: 'String'
  }
  Mutation: { // field return type name
    changeVisibility: 'updateVisibilityResponse'
    createActivity: 'Activity'
  }
  Query: { // field return type name
    fileBasedActivities: 'Activity'
    hardCodedActivity: 'Activity'
    inMemoryDbActivities: 'Activity'
  }
  updateVisibilityResponse: { // field return type name
    error: 'Boolean'
    message: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    changeVisibility: { // args
      visibilityUpdate: NexusGenInputs['visibilityArgs']; // visibilityArgs!
    }
    createActivity: { // args
      average_watts?: number | null; // Int
      distance: number; // Int!
      elapsed_time: number; // Int!
      max_watts?: number | null; // Int
      moving_time: number; // Int!
      name: string; // String!
      private: boolean; // Boolean!
      sport_type: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}