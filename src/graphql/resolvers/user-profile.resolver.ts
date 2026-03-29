import { Resolver, Query, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { UserProfileModel } from '../models/user-profile.model';

@Resolver(() => UserProfileModel)
export class UserProfileResolver {
  constructor(
    private users: UsersService,
    private reviews: ReviewsService,
    private orders: OrdersService,
    private favorites: FavoritesService,
  ) {}

  @Query(() => UserProfileModel)
  async userProfile(@Args('id', { type: () => ID }) id: string) {
    return this.users.findById(id);
  }

  // Each field resolver fires ONLY if client requests that field
  @ResolveField() reviews(@Parent() user: UserProfileModel) {
    return this.reviews.findByUser(user.id);
  }
  @ResolveField() recentOrders(@Parent() user: UserProfileModel) {
    return this.orders.findByUser(user.id, { limit: 10 });
  }
  @ResolveField() favorites(@Parent() user: UserProfileModel) {
    return this.favorites.findByUser(user.id);
  }
}