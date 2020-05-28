import axios from "axios";

export default {
    // Add Category Categories are unique
    addCat: function(data){
        return axios.post("/cat", data);
    },

    findAllCat: function(data){
        return axios.get("/allcat", data);
    },

    findCatByName: function(data){
        return axios.get("/catbyname", data);
    },

    delCatByName: function(data){
        return axios.delete("/delcatname", data);
    },

    delCatByID: function(data){
        return axios.delete("/cat", data);
    },

    addSkill: function(data){
        return axios.post("/skill", data);
    },

    getAllSkillsByUser: function(data){
        return axios.get("/skill", data)
    },

    delSkillById: function(data){
        return axios.delete("/skill", data)
    },
    masterSkill: function(data){
        return axios.put("/skill", data)
    },
    unmasterSkill: function(data){
        return axios.put("/unskill", data)
    },
    getAllMasteredSkills: function(data){
        return axios.get("/allmasteredskill", data)
    },

    getAllUnmasteredSkills: function(data){
        return axios.get("/allunmasteredskill", data)
    },

    addDef: function(data){
        return axios.post("/def", data)
    },

    updateDef: function(data){
        return axios.put("/def", data)
    },

    getDefById: function(data){
        return axios.get("/def", data)
    },

    delDefById: function(data){
        return axios.delete("/def", data)
    },

    getAllDefByUser: function(data){
        return axios.get("/alldeff", data)
    },

    addLib: function(data){
        return axios.post("/lib", data)
    },

    updateLibUrl: function(data){
        return axios.put("/liburl", data)
    },
    updateLibType: function(data){
        return axios.put("/libtype", data)
    },

    getAllLibByUser: function(data){
        return axios.get("/alllib", data)
    },

    getLibById: function(data){
        return axios.get("/lib", data)
    },

    getAllVidLib: function(data){
        return axios.get("allvidlib", data)
    },

    getAllTextLib: function(data){
        return axios.get("/alltextlib", data)
    },

    dellLibById: function(data){
        return axios.delete("/lib", data)
        }
    }
