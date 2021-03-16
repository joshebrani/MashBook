class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session

    helper_method :logged_in?, :current_user

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        unless logged_in?
            render json: { base: ["Invalid credentials"]}, status: 401
        end
        # redirect_to api_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
