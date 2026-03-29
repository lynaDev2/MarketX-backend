import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductFeedModel } from '../models/product-feed.model';
import { CursorPageDto } from '../../common/pagination/cursor.dto';

@Resolver()
export class ProductFeedResolver {
  constructor(private feedService: FeedService) {}

  @Query(() => ProductFeedConnection)
  async productFeed(@Args() args: CursorPageDto) {
    return this.feedService.getFeed(args);   // reuses cursor pagination from #260
  }
}