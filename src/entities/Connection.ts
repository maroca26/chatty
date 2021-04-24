import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("connections")
class Connection{
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  socket_id: string;

  @JoinColumn({ name: "user_id"})
  @ManyToOne(() => User) //many messages to one user
  user: User; // carry the User object, not only the user_id

  @Column() //db server will handle the FK
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor(){
    if (!this.id){
      this.id = uuid();
    }
  }

}

export { Connection };