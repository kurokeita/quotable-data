const { types } = require('../types')

const properties = {
  _id: types.id,
  name: types.slug,
}

const computedProperties = {
  slug: types.slug,
  quoteCount: { type: 'integer' },
  dateAdded: types.nonEmptyString,
  dateModified: types.nonEmptyString,
}

/**
 * Schema for a single `Tag` (source)
 * This is the schema for tags in the source data (`data/source`). Source
 * data does not include computed properties.
 */
const TagSource = {
  name: 'Tag',
  type: 'object',
  properties,
  required: Object.keys(properties),
  additionalProperties: false,
}

/**
 * Schema for a single `Tag`
 * This is the schema for a single Tag in the generated data files files
 * that are synced with the mongodb database. It includes additional computed
 * properties that not included in the source data.
 */
const Tag = {
  name: 'Tag',
  type: 'object',
  properties: { ...properties, ...computedProperties },
  required: [...Object.keys(properties), ...Object.keys(computedProperties)],
  additionalProperties: false,
}

const tags = {
  type: 'array',
  items: Tag,
}

// Named Exports
exports.TagSource = TagSource
exports.Tag = Tag
exports.tags = tags
exports.properties = properties
exports.computedProperties = computedProperties