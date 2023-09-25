
const Product = require('../model/product');


//create product
module.exports.create = async (req,res)=>{
    try {
        let product = await Product.findOne({name:req.body.name});
        if(product){
            return res.status(400).send("already product exist");
        }else{
            let product = await Product.create(req.body);
            res.status(200).json({
                data:{
                    product:product,
                    message:'product created'
                },
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error})
    }
}

//get all products
module.exports.products = async(req,res)=>{
    try {
        let products = await Product.find({});
        res.status(200).json({
            data:{products:products}});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error})
    }

}

module.exports.delete= async (req,res)=>{
    try {
        let product = await Product.findById(req.params.id);
        if(product){
            let product= await Product.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                data: {
                    message: 'product deleted'
                  }
                  })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error})
    }
}

module.exports.update = async (req,res)=>{
    try {
        let product=await Product.findById(req.params.id);
        if(product){
            let newquantity = parseInt(product.quantity)+parseInt(req.query.number)
            product.quantity = newquantity;
            await product.save();
            return res.status(200).json({
            data: {
                product :product
            },
            message: "updated successfully"
          })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error})
        
    }
}