import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import {CreateMessageDto} from "./dtos/create-message.dto";

@Controller('messages')
export class MessagesController {
  @Get()
  getListMessages() {
    return "lala"
  }

  @Post('/create')
  createMessage(@Body() body: CreateMessageDto){
    console.log(body)
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id)
  }
}