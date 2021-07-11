const aws = require('aws-sdk')
const {encode, decode} = require('./hash')
class AwsService {
  constructor() {
    this.accessKeyId = decode(process.env.AWSAccessKeyId)
    this.secretAccessKey = decode( process.env.AWSSecretKey)
    aws.config.update({
      region: process.env.AWS_REGION,
      accessKeyId: this.accessKeyId,
      secretAccessKey:this.secretAccessKey
    })

    this.S3_BUCKET = process.env.AWSBucket
    this.s3 = new aws.S3()
  }

  async createLinkUpload({ userId, fileName, fileType }) {
    const s3Params = {
      ContentType: fileType,
      Bucket: this.S3_BUCKET,
      Key: userId + '/' + fileName,
      Expires: 500
    }
    const urlGetObject = this.s3.getSignedUrl('getObject', {
      Bucket: this.S3_BUCKET,
      Key: userId + '/' + fileName,
      Expires: 500
    })
    const urlSaveObject = this.s3.getSignedUrl('putObject', s3Params)

    return {
      urlGetObject,
      urlSaveObject
    }
  }
}
module.exports = AwsService
