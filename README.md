# todoListAPI

## Schema
- 주의사항
form-data 이용
### fetch TodoList 
- url: localhost:3000/todos
- method : GET
- Schema : 
<pre>
   <code>
   {
      result: Boolean
      data: Array,
   }
   </code>
</pre>
status : 200
<pre>
   <code>
   {
      result: true,
      data: [
         {
            id: Number,
            text: String,
            edit: Boolean,
            done: Boolean,
         }
      ]
   }
   </code>
</pre>
status : 500
<pre>
   <code>
   {
      result: false,
      message: 에러메시지
   }
   </code>
</pre>
### Create TodoList 
- url: localhost:3000/todos
- method : POST
- Schema :
<pre>
   <code>
   request: {
      text: String,
   }
   </code>
</pre>
status : 200
<pre>
   <code>
   {
      result: true,
      data: [
         {
            id: Number,
            text: String,
            edit: Boolean,
            done: Boolean,
         }
      ]
   }
   </code>
</pre>
status : 500
<pre>
   <code>
   {
      result: false,
      message: 에러메시지
   }
   </code>
</pre>
### Delete TodoList 
- url: localhost:3000/todos/todoid/:id
- method : DELETE
- Schema :
status : 200
<pre>
   <code>
   {
      result: true,
      data: [
         {
            id: Number,
            text: String,
            edit: Boolean,
            done: Boolean,
         }
      ]
   }
   </code>
</pre>
status : 500
<pre>
   <code>
   {
      result: false,
      message: 에러메시지
   }
   </code>
</pre>
### Update TodoList 
- url: localhost:3000/todos/todoid/:id
- method : PUT
- Schema :
<pre>
   <code>
   status

   200 :{
      result: true,
      data: [
         {
            id: Number,
            text: String,
            edit: Boolean,
            done: Boolean,
         }
      ]
   }
   500: {
      result: false,
      message: 에러메시지
   }
   </code>
</pre>