// // import { CommentsApi } from './apiUrl'
// import { projectId } from '../config'
// import axios from './axiosSetting'
// import jsonp from 'jsonp'
// export const InteractiveApiFun = {
//   releaseComment: function (data) {
//     // const url = CommentsApi.releaseComment + `&message=${data.message}&tid=${projectId.tid}&fid=${projectId.fid}`
//     return new Promise((resolve, reject) => {
//       jsonp(url, null, (err, res) => {
//         if (err) {
//           console.error(err.message)
//           reject(err)
//         } else {
//           resolve(res)
//         }
//       })
//     })
//   },
//   // 获取主题信息
//   getThemeInfo: function (data) {
//     // const url = CommentsApi.getThemeInfo + `&tid=${projectId.tid}&fid=${projectId.fid}`
//     return new Promise((resolve, reject) => {
//       jsonp(url, null, (err, res) => {
//         if (err) {
//           console.error(err.message)
//           reject(err)
//         } else {
//           resolve(res)
//         }
//       })
//     })
//   },
//   // 点赞或者反对
//   actionForRecommendOrDis: function (objData) {
//     // const url = CommentsApi.actionForRecommendOrDis + `&tid=${projectId.tid}&fid=${projectId.fid}&type=${objData.type}`
//     return new Promise((resolve, reject) => {
//       jsonp(url, null, (err, res) => {
//         if (err) {
//           console.error(err.message)
//           reject(err)
//         } else {
//           resolve(res)
//         }
//       })
//     })
//   },
//   // 获取已审核评论
//   getApprovaledComments: function (objData) {
//     const url = CommentsApi.getApprovalCommnets + `&tid=${projectId.tid}&fid=${projectId.fid}&ajax=1&offset=${objData.offset}&limit=${objData.limit}`
//     return axios.get(url)
//   },
// }
