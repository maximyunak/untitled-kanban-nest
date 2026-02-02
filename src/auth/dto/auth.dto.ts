import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'AccessToken',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6I...',
  })
  accessToken: string;
}
