class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  # class ApplicationController < ActionController::API 
#   include ActionController::MimeResponds
#   def self.respond_to(*mimes)
#     include ActionController::RespondWith::ClassMethods
#   end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
end
