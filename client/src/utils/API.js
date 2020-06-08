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

    delCatByID: function(data){
        return axios.delete("/api/cat/cat", data);
    },

    addSkill: function(data){
        return axios.post("/api/skill/skill", data);
    },

    getAllSkillsByUser: function(data){
        return axios.get("/api/skill/skill", data)
    },

    delSkillById: function(data){
        return axios.delete("/api/skill/skill", data)
    },
    masterSkill: function(data){
        return axios.put("/api/skill/skill", data)
    },
    unmasterSkill: function(data){
        return axios.put("/api/skill/unskill", data)
    },
    getAllMasteredSkills: function(data){
        return axios.get("/api/skill/allmasteredskill", data)
    },

    getAllUnmasteredSkills: function(data){
        return axios.get("/api/skill/allunmasteredskill", data)
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

    delDefById: function(data){
        return axios.delete("/api/def/def", data)
    },

    getAllDefByUser: function(data){
        return axios.get("/api/def/alldef", data)
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

    delLibById: function(data){
        return axios.delete("/api/lib/lib", data)
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
