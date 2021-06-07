
function mapEventStoreToDatabaseDocument(eventStoreDocument){
    return {
        _id: eventStoreDocument.sourceId,
        ...eventStoreDocument.payload
    }
}


class Denormalizer {
    documentModel
    eventModel
    constructor({documentModel, eventModel}){
        this.documentModel = documentModel
        this.eventModel = eventModel
    }
    run(){
        console.log(this.documentModel)
        this.eventModel.watch().on('change', async (data) => {
            try{
            if(data.operationType !== 'insert') return
                const databaseDocument = mapEventStoreToDatabaseDocument(data.fullDocument)
                console.log(databaseDocument)
                const result = await this.documentModel.updateOne({_id: databaseDocument._id}, databaseDocument)
                console.log(result)
        } catch(e){
            console.log(`${Denormalizer.name} error`, e)
        }
        })
    }
}

module.exports = Denormalizer