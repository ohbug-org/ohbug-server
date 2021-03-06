import type { FindOperator } from 'typeorm'

export interface GetIssueByIssueIdParams {
  issue_id: number | string
}

export interface SearchCondition {
  start?: Date
  end?: Date
}

export interface GetIssuesByProjectIdParams {
  project_id: number
  searchCondition: SearchCondition
  limit?: number
  skip?: number
}

export interface WhereOptions {
  time?: FindOperator<number | string>
}

export type Period = '24h' | '14d' | 'all'
