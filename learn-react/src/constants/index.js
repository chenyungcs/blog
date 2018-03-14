import { sortBy } from 'lodash'

/**
 * index
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
export const PATH_BASE = 'https://hn.algolia.com/api/v1'
export const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse()
}
