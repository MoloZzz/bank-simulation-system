import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LoggedInGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        if (!request.isAuthenticated()) {
            throw new UnauthorizedException('Session expired or user not authenticated');
        }
        return true;
    }
}
