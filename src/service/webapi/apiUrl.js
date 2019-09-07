import { DomainConfig } from './domainSetting'
const env = 'production' // process.env.NODE_ENV || 'production'
// TODO: 域名动态切换
export const CommentsApi = {
  releaseComment: DomainConfig[env].host + 'index.php?m=Home&c=Msg&a=post_reply',
  getThemeInfo: DomainConfig[env].host + 'index.php?m=Home&c=Msg&a=thread_detail',
  actionForRecommendOrDis: DomainConfig[env].host + 'index.php?m=Home&c=Msg&a=thread_review',
  getApprovalCommnets: DomainConfig[env].host + 'index.php?m=Home&c=Msg&a=get_reply',
}
