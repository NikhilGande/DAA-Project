



class node{

      constructor(sn) { 

      this.star_number=sn;
      this.label=1;
      this.next_node=null;
      this.neighbour_nodes=[];
     
      }
	
}


let edge_weight=[];


function generate_caterpillar(n){


      let initial_node=new node(1);

      initial_node.label=1;

      initial_node.neighbour_nodes.push(1);

      edge_weight.push(2);

      if(n==1)

          return initial_node;


      let present_star=initial_node;    

      for(let i=2;i<=n;i++){
      
         presentstar=generateStar(present_star,initial_node,n,i);

        present_star=presentstar;

      }    

    
    return initial_node;


}


function generateStar(presentStar,initial_node,n,i){


         let newstarnum=presentStar.star_number+1;

         let new_node=new node(newstarnum);

         presentStar.next_node=new_node;

         if(i==n){

              new_node.label=Math.ceil(n*(n+3)/4);
              edge_weight.push(new_node.label+ presentStar.label);

         }
         else
         generateMainlabel(presentStar,new_node);


         for(i=1;i<=new_node.star_number;i++){

         generateChildrenforStar(new_node);

         }


         return new_node;


}

function generateChildrenforStar(nn){
	
      let parent_label=nn.label;

      assigned_label=2;

      let check=true;


      while(1){

       let total=parent_label+assigned_label;

       check=edge_weight.includes(total);

       if(!check){


        
         edge_weight.push(total);

         nn.neighbour_nodes.push(assigned_label);


         break;

      }

      assigned_label=assigned_label+1;




      }



}

function generateMainlabel(ps,nn){


    node_l=2;

    previous_l=ps.label;	
    let check=true;
	while(1){

      total=node_l+previous_l;

       check=edge_weight.includes(total);


      if(!check){


        nn.label=node_l;
        edge_weight.push(total);

        break;

      }

      node_l=node_l+1;


	}
}





let start_node=generate_caterpillar(2);


console.log(edge_weight)


/*for(let i=0;i<edge_weight.length;i++){
    console.log(edge_weight[i]);
}*/
// Travesing the graph

for(i=1;i<=2;i++){
	
   console.log(start_node.label);

   let num=start_node.star_number;

   let s=start_node.neighbour_nodes;
   console.log(s);
   start_node=start_node.next_node;


}




