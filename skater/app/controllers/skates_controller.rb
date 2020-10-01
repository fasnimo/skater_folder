class SkatesController < ApplicationController
  before_action :set_skate, only: [:show, :update, :destroy]

  def index
    @skates = Skate.where(level: params[:level])
    
    render json: @skates
  end

  def show
    render json: @skate
  end

  def create
    @skate = Skate.new(skate_params)

    if @skate.save
      render json: @skate, status: :created, location: @skate
    else
      render json: @skate.errors, status: :unprocessable_entity
    end
  end

  def update
    if @skate.update(skate_params)
      render json: @skate
    else
      render json: @skate.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @skate.destroy
  end

  private
    def set_skate
      @skate = Skate.find(params[:id])
    end

    def skate_params
      params.require(:skate).permit(:level, :name)
    end
end
