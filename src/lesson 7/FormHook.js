import { useForm } from "react-hook-form"


export default function FormHook(){
    const {register, handleSubmit, formState:{errors}}  = useForm()
    const handleRegisration=(data)=>{console.log(data)}

    const requiresOptions = {
        name:{
            required: "Name is required", 
            minLength:{value: 2, message: "Minimum 2 tags is must"}
        },
        password:{
            required: "Password is required",
            minLength: {value:4, message: "Passwird must have at least 4 charactors"}
        },
        email: {required: "Email is required"},
        phoneNumber: {required: "Phone Numbr is required"}
    }
    return(
        <>
        <form onSubmit={handleSubmit(handleRegisration)}>
            <input placeholder="name" name="name" {...register('name', requiresOptions.name)} type="text"></input>
            <br></br>
            <small style={{color : "red"}}>{errors?.name&&errors.name.message}</small>
            <br></br>
            <input placeholder="password" name="password" {...register('password', requiresOptions.password)} type="password"></input>
            <br></br>
            <small style={{color : "red"}}>{errors?.password&&errors.password.message}</small>
            <br></br>
            <input placeholder="email" name="email" {...register('email', requiresOptions.email)} type="email"></input>
            <br></br>
            <small style={{color : "red"}}>{errors?.email&&errors.email.message}</small>
            <br></br>
            <input placeholder="phone number" name="phoneNumber" {...register('phoneNumber', requiresOptions.phoneNumber)} type="number"></input>
            <br></br>
            <small style={{color : "red"}}>{errors?.phoneNumber&&errors.phoneNumber.message}</small>
            <br></br>
            <button type="submit">submit</button>
        </form>
        </>
    )
}