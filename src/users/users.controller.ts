import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() createuserDto: CreateUserDto,@Res() res: Response) {
        this.usersService.create(createuserDto);
        res.status(HttpStatus.CREATED).json();
      
    }
  
    @Get()
    async findAll(@Res() res: Response) {
        res.status(HttpStatus.OK).json(await this.usersService.findAll());

    }

    @Delete(':id')
    async remove(@Param('id') id: string,@Res() res: Response) {
        res.status(HttpStatus.ACCEPTED).json(await this.usersService.deleteById(id));
    }
  
}
