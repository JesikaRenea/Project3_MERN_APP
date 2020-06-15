import axios from "axios";

export default {
    // Add Category Categories are unique
    addCat: function(data){
        return axios.post("/api/cat/cat", data);
    },

    findAllCat: function(data){
        return axios.get("/api/cat/allcat", data);
    },

    findCatByName: function(data){
        return axios.get("/api/cat/catbyname", data);
    },

    findCatById: function(data){
        return axios.get("/api/cat/catbyid", data);
    },

    delCatByName: function(data){
        return axios.delete("/api/cat/delcatname", data);
    },

    delCatByID: function(id){
        return axios.delete("/api/cat/cat/" + id);
    },

    addSkill: function(data){
        return axios.post("/api/skill/skill", data);
    },

    getAllSkillsByUser: function(data){
        return axios.get("/api/skill/skill", data)
    },

    delSkillById: function(skillId){
        return axios.delete("/api/skill/skill/" + skillId)
    },
    masterSkill: function(skillId){
        return axios.put("/api/skill/skill/" + skillId)
    },
    unmasterSkill: function(skillId){
        return axios.put("/api/skill/unskill/" + skillId)
    },
    getAllMasteredSkills: function(data){
        return axios.get("/api/skill/allmasteredskill", data)
    },

    getAllUnmasteredSkills: function(data){
        return axios.get("/api/skill/allunmasteredskill", data)
    },

    getAllSkillsByCat: function(data){
        return axios.get("/api/skill/allskillcat",data)
    },

    addDef: function(data){
        return axios.post("/api/def/def", data)
    },

    updateDef: function(data){
        return axios.put("/api/def/def", data)
    },

    getDefById: function(data){
        return axios.get("/api/def/def", data)
    },

    delDefById: function(defId){
        return axios.delete("/api/def/def/" + defId)
    },

     getAllDefByUser: function(data){
        return axios.get("/api/def/alldef", data)
    },

    getAllDefByCat: function(data){
        return axios.get("/api/def/alldefcat",data)
    },

    addLib: function(data){
        return axios.post("/api/lib/lib", data)
    },

    updateLibUrl: function(data){
        return axios.put("/api/lib/liburl", data)
    },

    updateLibType: function(data){
        return axios.put("/api/lib/libtype", data)
    },

    getAllLibByUser: function(data){
        return axios.get("/api/lib/alllib", data)
    },

    getLibById: function(data){
        return axios.get("/api/lib/lib", data)
    },

    getAllVidLib: function(data){
        return axios.get("/api/lib/allvidlib", data)
    },

    getAllTextLib: function(data){
        return axios.get("/api/lib/alltextlib", data)
    },

    getAllLibByCat: function(data){
        return axios.get("/api/lib/alllibcat",data)
    },

    delLibById: function(libId){
        return axios.delete("/api/lib/lib/" + libId)
        },
    
    extWebSearch: function(data){
        return axios.post("/api/ext/web", data)
    },

    extNewsSearch: function(data){
        return axios.post("/api/ext/news", data)
    },

    extVideoSearch: function(data){
        return axios.post("/api/ext/video", data)
    }
}
