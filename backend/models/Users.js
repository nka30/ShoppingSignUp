module.exports =(sequelize,DataTypes)=>{
    const Users=sequelize.define("Users",{
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        address:{
            type:DataTypes.STRING,
            allowNull: false 
        },
        opAds:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    return Users
}