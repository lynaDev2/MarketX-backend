import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserProfileModel {
  @Field(() => ID) id: string;
  @Field() username: string;
  @Field() email: string;
  @Field(() => [ReviewModel])    reviews: ReviewModel[];
  @Field(() => [OrderModel])     recentOrders: OrderModel[];
  @Field(() => [FavoriteModel])  favorites: FavoriteModel[];
}