class SkatesController < ApplicationController

  def index
    @skates = Skate.where(level: params[:level])
    
    render json: @skates
  end

  private
  
    def skate_params
      params.require(:skate).permit(:level, :name)
    end
end
