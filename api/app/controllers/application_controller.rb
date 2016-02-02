class ApplicationController < ActionController::Base
# class ApplicationController < ActionController::API 
#   include ActionController::MimeResponds
#   def self.respond_to(*mimes)
#     include ActionController::RespondWith::ClassMethods
#   end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  before_action :authenticate!

  private
    def authenticate!
      authenticate_token || render_unauthorized
    end

    def authenticate_token
# byebug
      authenticate_with_http_token do |token, options|
         Account.find_by(authentication_token: token)
       end
    end

    def render_unauthorized
      render json: {
        errors: ['Bad credentials']
      }, status: 401
    end 
end
