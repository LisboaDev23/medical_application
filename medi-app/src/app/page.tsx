import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string|null>('');

  const authentication = async (e:any) => {
    e.preventDefault();
    setError(null);

    if(login !== "" && password !== ""){

      const formData = {
        login:login,
        password: password
      };

      const add = await fetch('http:/localhost:3001/login', {
        method:'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      });

      const content = await add.json();
      if (content.token) {
        sessionStorage.setItem("token", content.token);
        router.push('/home');
      } else {
        setError(content.error);  
      }
    }
  }

  return (

  );
}
